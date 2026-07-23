import { test } from "@playwright/test";

const viewports = [
  { name: "mobile", width: 375, height: 812 },
  { name: "tablet", width: 768, height: 1024 },
  { name: "desktop", width: 1440, height: 1200 },
] as const;

for (const theme of ["light", "dark"] as const) {
  for (const viewport of viewports) {
    test(`${theme} ${viewport.name} portfolio`, async ({ page }, testInfo) => {
      await page.setViewportSize(viewport);
      await page.addInitScript((selectedTheme) => {
        localStorage.setItem("atn-theme", selectedTheme);
      }, theme);
      await page.goto("/");
      await page.screenshot({
        path: testInfo.outputPath(`${theme}-${viewport.name}.png`),
        fullPage: true,
      });
    });
  }
}

test("Return to Sender at desktop and mobile sizes", async ({ page }, testInfo) => {
  for (const viewport of [viewports[0], viewports[2]]) {
    await page.setViewportSize(viewport);
    await page.goto("/missing-address");
    await page.screenshot({
      path: testInfo.outputPath(`404-${viewport.name}.png`),
      fullPage: true,
    });
  }
});
