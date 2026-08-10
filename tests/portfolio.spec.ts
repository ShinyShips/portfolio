import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { portfolio } from "../src/data/portfolio";

test("visitor receives the complete Air Mail portfolio", async ({ page }) => {
  await page.goto("/");

  await expect(
    page.getByRole("heading", { level: 1, name: "ATTN: You." }),
  ).toBeVisible();

  for (const heading of [
    "Overview",
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

test("expanded work and project records are available as first-class pages", async ({
  page,
}) => {
  await page.goto("/work");
  await expect(
    page.getByRole("heading", { level: 1, name: "RE: Work." }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { level: 2, name: "L3Harris Technologies" }),
  ).toBeVisible();
  await expect(page.getByText("Senior Associate Software Engineer")).toBeVisible();
  await expect(page.getByRole("link", { name: "WORK", exact: true })).toHaveAttribute(
    "aria-current",
    "page",
  );
  await expect(page).toHaveTitle("Work | Andy Nguyen");
  await expect(
    page.getByRole("link", { name: "POSTCARDS FROM MY PROJECTS →" }),
  ).toHaveAttribute("href", "/projects");

  await page.goto("/projects");
  await expect(
    page.getByRole("heading", { level: 1, name: "ENCL: Projects." }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { level: 2, name: "Maneuver", exact: true }),
  ).toBeVisible();
  await expect(page.locator(".project-feature h2")).toHaveText([
    "Maneuver",
    "Team 3314 Website",
    "HudsonHapps",
    "Piper's Patterns",
  ]);
  await expect(page.getByText("JUL 2025 — PRESENT")).toBeVisible();
  await expect(
    page.getByText(
      "Open-source, offline-first scouting and strategy suite for FIRST Robotics Competition teams, reaching 8,000+ users since 2025.",
    ),
  ).toBeVisible();
  await expect(
    page.getByText(
      "Maneuver combines match and pit scouting, interactive analytics, alliance selection, and match-strategy planning in a PWA designed for the unreliable connectivity of robotics competitions. Built on a year-agnostic React/TypeScript framework, Maneuver stores data locally with IndexedDB and supports resilient multi-device data sharing through Luby Transform QR fountain codes and WebRTC.",
    ),
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "PROJECTS", exact: true }),
  ).toHaveAttribute("aria-current", "page");
  await expect(page).toHaveTitle("Projects | Andy Nguyen");
  await expect(
    page.locator(
      'a[href="https://github.com/ShinyShips/Maneuver"][target="_blank"]',
    ),
  ).toHaveAttribute("href", "https://github.com/ShinyShips/Maneuver");
  await expect(
    page.getByRole("link", { name: "EMPLOYMENT RECORD →" }),
  ).toHaveAttribute("href", "/work");

  for (const link of await page.locator('a[target="_blank"]').all()) {
    await expect(link).toHaveAttribute("rel", /noopener/);
    await expect(link).toHaveAttribute("rel", /noreferrer/);
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

  const overviewLink = page.getByRole("link", { name: "OVERVIEW", exact: true });
  await expect(overviewLink).toHaveAttribute("href", "/");
  await expect(overviewLink).toHaveAttribute("aria-current", "page");
  await expect(page.getByRole("link", { name: "WORK", exact: true })).toHaveAttribute(
    "href",
    "/work",
  );
  await expect(
    page.getByRole("link", { name: "PROJECTS", exact: true }),
  ).toHaveAttribute("href", "/projects");
  await expect(
    page.getByRole("link", { name: "CONTACT", exact: true }),
  ).toHaveAttribute("href", "/#contact");

  await page.getByRole("link", { name: "WORK", exact: true }).click();
  await expect(page).toHaveURL("/work");
  await expect(page.getByRole("heading", { name: "RE: Work." })).toBeVisible();

  await page.getByRole("link", { name: "PROJECTS", exact: true }).click();
  await expect(page).toHaveURL("/projects");
  await expect(page.getByRole("heading", { name: "ENCL: Projects." })).toBeVisible();

  await page.getByRole("link", { name: "CONTACT", exact: true }).click();
  await expect(page).toHaveURL("/#contact");
  await expect(page.locator("#contact")).toBeInViewport();

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
  for (const route of ["/", "/work", "/projects"]) {
    await page.goto(route);

    await expect(page.locator("header")).toHaveCount(1);
    await expect(page.locator("main")).toHaveCount(1);
    await expect(page.locator("footer")).toHaveCount(1);
    await expect(
      page.getByRole("navigation", { name: "Primary navigation" }),
    ).toBeVisible();

    const headingLevels = await page
      .locator("h1, h2, h3, h4, h5, h6")
      .evaluateAll((headings) =>
        headings.map((heading) => Number(heading.tagName.slice(1))),
      );
    expect(headingLevels[0], route).toBe(1);
    expect(headingLevels.filter((level) => level === 1), route).toHaveLength(1);
    headingLevels.slice(1).forEach((level, index) => {
      expect(level, route).toBeLessThanOrEqual(headingLevels[index] + 1);
    });

    for (const control of await page.locator("a, button").all()) {
      if (await control.isVisible()) {
        await expect(control).toHaveAccessibleName(/.+/);
      }
    }
  }
});

test("all public routes load without browser errors", async ({ page }) => {
  const errors: string[] = [];
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(message.text());
  });
  page.on("pageerror", (error) => errors.push(error.message));

  for (const route of ["/", "/work", "/projects"]) {
    await page.goto(route, { waitUntil: "domcontentloaded" });
    await expect(page.locator("main")).toBeVisible();
  }

  expect(errors).toEqual([]);
});

test("postage graphics decorate only the wide-screen margins", async ({
  page,
}) => {
  for (const { route, pageName } of [
    { route: "/", pageName: "overview" },
    { route: "/work", pageName: "work" },
    { route: "/projects", pageName: "projects" },
  ]) {
    const doodles = page.locator(`.margin-doodles--${pageName}`);

    await page.setViewportSize({ width: 1440, height: 1200 });
    await page.goto(route);
    await expect(doodles).toBeVisible();
    await expect(doodles).toHaveAttribute("aria-hidden", "true");
    await expect(doodles).toHaveCSS("pointer-events", "none");

    await page.setViewportSize({ width: 1179, height: 1200 });
    await expect(doodles).toBeHidden();
  }
});

test("mobile header keeps the theme beside the logo and navigation on one row", async ({
  page,
}) => {
  for (const width of [320, 375, 430]) {
    await page.setViewportSize({ width, height: 812 });
    await page.goto("/");

    const logo = await page.getByRole("link", { name: "ATN home" }).boundingBox();
    const theme = await page
      .getByRole("button", { name: "Switch to Night Flight theme" })
      .boundingBox();
    const navLinks = await page
      .getByRole("navigation", { name: "Primary navigation" })
      .getByRole("link")
      .all();
    const navBoxes = await Promise.all(
      navLinks.map((link) => link.boundingBox()),
    );

    expect(logo).not.toBeNull();
    expect(theme).not.toBeNull();
    expect(navBoxes.every((box) => box !== null)).toBe(true);

    const logoCenter = logo!.y + logo!.height / 2;
    const themeCenter = theme!.y + theme!.height / 2;
    expect(Math.abs(logoCenter - themeCenter)).toBeLessThanOrEqual(1);

    const navTop = navBoxes[0]!.y;
    expect(navBoxes.every((box) => Math.abs(box!.y - navTop) <= 1)).toBe(true);
    expect(navTop).toBeGreaterThan(logo!.y + logo!.height);
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
  await expect(page).toHaveURL("/work");

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
    { route: "/work", theme: "light" },
    { route: "/projects", theme: "dark" },
    { route: "/missing-address", theme: "light" },
    { route: "/missing-address", theme: "dark" },
  ]) {
    await page.addInitScript((theme) => {
      localStorage.setItem("atn-theme", theme);
    }, testCase.theme);
    await page.goto(testCase.route);

    const results = await new AxeBuilder({ page })
      .exclude(".margin-doodles")
      .analyze();
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
    for (const route of ["/", "/work", "/projects"]) {
      await page.goto(route);

      const dimensions = await page.evaluate(() => ({
        scrollWidth: document.documentElement.scrollWidth,
        clientWidth: document.documentElement.clientWidth,
      }));

      expect(
        dimensions.scrollWidth,
        `${route} at ${viewport.width}px`,
      ).toBeLessThanOrEqual(dimensions.clientWidth);
    }
  });
}
