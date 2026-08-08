import { test, expect } from "@playwright/test";

test("Sample Test", async ({ page }) => {

    // PW001 - Hardcoded Wait
    await page.waitForTimeout(5000);

    // PW002 - XPath Locator
    await page.locator("//button[@id='login']").click();

    // PW003 - Force Click
    await page.locator("#login").click({
        force: true
    });

});