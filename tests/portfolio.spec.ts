import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { portfolio } from "../src/data/portfolio";

test("visitor receives the complete Air Mail portfolio", async ({ page }) => {
  await page.goto("/");

  await expect(
    page.getByRole("heading", { level: 1, name: "ATTN: You." }),
  ).toBeVisible();

  for (const heading of [
    "About",
    "Work",
    "Education",
    "Contents of Parcel",
    "Postcards from My Projects",
    "Minor Parcels",
    "Return Address",
  ]) {
    await expect(page.getByRole("heading", { name: heading })).toBeVisible();
  }
});

test("misaddressed visitors receive the Return to Sender page", async ({
  page,
}) => {
  await page.goto("/this-address-does-not-exist");

  await expect(
    page.getByRole("heading", { level: 1, name: "No such address." }),
  ).toBeVisible();
  await expect(page.getByText("ADDRESSEE UNKNOWN")).toBeVisible();

  await page.getByRole("link", { name: "Return home" }).click();
  await expect(page).toHaveURL("/");
});

test("visitor can navigate the letter and safely open external addresses", async ({
  page,
}) => {
  await page.goto("/");

  for (const destination of [
    { label: "ABOUT", id: "about" },
    { label: "WORK", id: "work" },
    { label: "PROJECTS", id: "projects" },
    { label: "CONTACT", id: "contact" },
  ]) {
    await page.getByRole("link", { name: destination.label, exact: true }).click();
    await expect(page).toHaveURL(new RegExp(`#${destination.id}$`));
    await expect(page.locator(`#${destination.id}`)).toBeInViewport();
  }

  const externalLinks = page.locator('a[target="_blank"]');
  await expect(externalLinks).not.toHaveCount(0);
  for (const link of await externalLinks.all()) {
    await expect(link).toHaveAttribute("rel", /noopener/);
    await expect(link).toHaveAttribute("rel", /noreferrer/);
  }

  const expectedExternalUrls = [
    ...portfolio.about.flatMap((segment) =>
      typeof segment === "string" ? [] : [segment.href],
    ),
    ...portfolio.work.map(({ href }) => href),
    ...portfolio.education.map(({ href }) => href),
    ...portfolio.projects.map(({ href }) => href),
    ...portfolio.minorProjects.map(({ href }) => href),
    portfolio.social.github,
    portfolio.social.linkedin,
  ].sort();
  const actualExternalUrls = await externalLinks.evaluateAll((links) =>
    links.map((link) => link.getAttribute("href") ?? "").sort(),
  );
  expect(actualExternalUrls).toEqual(expectedExternalUrls);

  await expect(page.getByRole("link", { name: "andy@atn.dev" })).toHaveAttribute(
    "href",
    "mailto:andy@atn.dev",
  );
});

test("Night Flight preference persists independently of the system theme", async ({
  page,
}) => {
  await page.emulateMedia({ colorScheme: "dark" });
  await page.goto("/");

  await expect(page.locator("html")).not.toHaveClass(/dark/);
  await page
    .getByRole("button", { name: "Switch to Night Flight theme" })
    .click();
  await expect(page.locator("html")).toHaveClass(/dark/);
  await expect
    .poll(() => page.evaluate(() => localStorage.getItem("atn-theme")))
    .toBe("dark");

  await page.reload();
  await expect(page.locator("html")).toHaveClass(/dark/);
  await expect(
    page.getByRole("button", { name: "Switch to Day theme" }),
  ).toBeVisible();
});

test("portfolio metadata and social card describe the Air Mail site", async ({
  page,
}) => {
  await page.goto("/");

  await expect(page).toHaveTitle("Andy Nguyen — UX/Design Engineer");
  await expect(page.locator('meta[name="description"]')).toHaveAttribute(
    "content",
    /UX\/Design Engineer/,
  );
  await expect(page.locator('meta[property="og:image"]')).toHaveAttribute(
    "content",
    "https://atn.dev/og-image.png",
  );

  const socialCardDimensions = await page.evaluate(async () => {
    const image = new Image();
    image.src = "/og-image.png";
    await image.decode();
    return { width: image.naturalWidth, height: image.naturalHeight };
  });
  expect(socialCardDimensions).toEqual({ width: 1200, height: 630 });
});

test("semantic structure, heading order, and accessible names are complete", async ({
  page,
}) => {
  await page.goto("/");

  await expect(page.locator("header")).toHaveCount(1);
  await expect(page.locator("main")).toHaveCount(1);
  await expect(page.locator("footer")).toHaveCount(1);
  await expect(page.getByRole("navigation", { name: "Primary navigation" })).toBeVisible();

  const headingLevels = await page
    .locator("h1, h2, h3, h4, h5, h6")
    .evaluateAll((headings) =>
      headings.map((heading) => Number(heading.tagName.slice(1))),
    );
  expect(headingLevels[0]).toBe(1);
  expect(headingLevels.filter((level) => level === 1)).toHaveLength(1);
  headingLevels.slice(1).forEach((level, index) => {
    expect(level).toBeLessThanOrEqual(headingLevels[index] + 1);
  });

  for (const control of await page.locator("a, button").all()) {
    if (await control.isVisible()) {
      await expect(control).toHaveAccessibleName(/.+/);
    }
  }
});

test("keyboard visitors can skip, navigate, and switch themes", async ({
  page,
}) => {
  await page.goto("/");

  await page.keyboard.press("Tab");
  await expect(page.getByRole("link", { name: "Skip to content" })).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page).toHaveURL(/#main-content$/);

  const workLink = page.getByRole("link", { name: "WORK", exact: true });
  await workLink.focus();
  await page.keyboard.press("Enter");
  await expect(page).toHaveURL(/#work$/);

  const themeToggle = page.getByRole("button", {
    name: "Switch to Night Flight theme",
  });
  await themeToggle.focus();
  await page.keyboard.press("Enter");
  await expect(page.locator("html")).toHaveClass(/dark/);
});

test("themes and 404 have no serious contrast or axe violations", async ({
  page,
}) => {
  for (const testCase of [
    { route: "/", theme: "light" },
    { route: "/", theme: "dark" },
    { route: "/missing-address", theme: "light" },
  ]) {
    await page.addInitScript((theme) => {
      localStorage.setItem("atn-theme", theme);
    }, testCase.theme);
    await page.goto(testCase.route);

    const results = await new AxeBuilder({ page }).analyze();
    const seriousViolations = results.violations.filter(
      ({ impact }) => impact === "serious" || impact === "critical",
    );

    expect(seriousViolations, `${testCase.theme} ${testCase.route}`).toEqual([]);
  }
});

test("reduced motion, media, and interactive sizing remain safe", async ({
  page,
}) => {
  const consoleErrors: string[] = [];
  page.on("console", (message) => {
    if (message.type() === "error") consoleErrors.push(message.text());
  });
  page.on("pageerror", (error) => consoleErrors.push(error.message));

  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");

  const motion = await page.evaluate(() => {
    const html = getComputedStyle(document.documentElement);
    const button = getComputedStyle(document.querySelector("button")!);
    return {
      scrollBehavior: html.scrollBehavior,
      transitionDuration: button.transitionDuration,
      animationDuration: button.animationDuration,
    };
  });
  expect(motion.scrollBehavior).toBe("auto");
  expect(Number.parseFloat(motion.transitionDuration)).toBeLessThanOrEqual(
    0.00001,
  );
  expect(Number.parseFloat(motion.animationDuration)).toBeLessThanOrEqual(
    0.00001,
  );

  const imageHealth = await page.locator("img").evaluateAll((images) =>
    images.map((element) => {
      const image = element as HTMLImageElement;
      return {
        complete: image.complete,
        naturalWidth: image.naturalWidth,
        naturalHeight: image.naturalHeight,
        renderedWidth: image.getBoundingClientRect().width,
        renderedHeight: image.getBoundingClientRect().height,
      };
    }),
  );
  expect(imageHealth).not.toHaveLength(0);
  for (const image of imageHealth) {
    expect(image.complete).toBe(true);
    expect(image.naturalWidth).toBeGreaterThan(0);
    expect(image.naturalHeight).toBeGreaterThan(0);
    expect(image.renderedWidth).toBeGreaterThan(0);
    expect(image.renderedHeight).toBeGreaterThan(0);
  }

  for (const control of await page
    .locator(
      ".primary-nav a, .theme-toggle, .work-card, .postcard, .minor-parcel, .contact-section a",
    )
    .all()) {
    const box = await control.boundingBox();
    expect(box?.height).toBeGreaterThanOrEqual(44);
  }

  expect(consoleErrors).toEqual([]);
});

for (const viewport of [
  { name: "mobile", width: 375, height: 812 },
  { name: "tablet", width: 768, height: 1024 },
  { name: "desktop", width: 1440, height: 1200 },
]) {
  test(`${viewport.name} layout has no horizontal overflow`, async ({ page }) => {
    await page.setViewportSize(viewport);
    await page.goto("/");

    const dimensions = await page.evaluate(() => ({
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth,
    }));

    expect(dimensions.scrollWidth).toBeLessThanOrEqual(dimensions.clientWidth);
  });
}
