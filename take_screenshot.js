const { chromium } = require('playwright');
const path = require('path');

async function run() {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto('http://localhost:3000/pricing');
    // Wait for animations
    await page.waitForTimeout(2000);
    const screenshotPath = path.resolve('pricing_preview.png');
    await page.screenshot({ path: screenshotPath, fullPage: true });
    await browser.close();
    console.log(`Screenshot saved to ${screenshotPath}`);
}

run().catch(err => {
    console.error(err);
    process.exit(1);
});
