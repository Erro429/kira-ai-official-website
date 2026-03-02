import { chromium } from 'playwright';

(async () => {
    process.env.HOME = 'C:\\Users\\hustl';
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.setViewportSize({ width: 1280, height: 3000 });

    console.log('Navigating to http://localhost:3000/pricing...');
    try {
        await page.goto('http://localhost:3000/pricing', { waitUntil: 'networkidle' });
        await page.waitForTimeout(5000); // Wait for animations

        console.log('Capturing screenshot...');
        await page.screenshot({ path: 'C:\\Users\\hustl\\.gemini\\antigravity\\brain\\5f721ba7-7b6b-49fb-bbbd-27e29d16ae7c\\pricing_restored_verification_v2.png', fullPage: true });
        console.log('Done!');
    } catch (e) {
        console.error('Error:', e);
    } finally {
        await browser.close();
    }
})();
