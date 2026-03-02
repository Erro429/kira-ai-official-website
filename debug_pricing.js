import { chromium } from 'playwright';

(async () => {
    process.env.HOME = 'C:\\Users\\hustl';
    const browser = await chromium.launch();
    const page = await browser.newPage();

    page.on('console', msg => console.log('PAGE LOG:', msg.text()));
    page.on('pageerror', err => console.error('PAGE ERROR:', err.message));

    await page.setViewportSize({ width: 1280, height: 3000 });

    console.log('Navigating to http://localhost:3000/pricing...');
    try {
        const response = await page.goto('http://localhost:3000/#/pricing', { waitUntil: 'networkidle' });
        console.log('Response status:', response.status());

        await page.waitForTimeout(5000);

        console.log('Capturing screenshot...');
        await page.screenshot({ path: 'C:\\Users\\hustl\\.gemini\\antigravity\\brain\\5f721ba7-7b6b-49fb-bbbd-27e29d16ae7c\\pricing_restored_verification_v3.png', fullPage: true });

        const content = await page.content();
        console.log('Page content length:', content.length);
        console.log('Body class:', await page.evaluate(() => document.body.className));
        console.log('Pricing container exists:', await page.evaluate(() => !!document.querySelector('.pricing-page-container')));

        console.log('Done!');
    } catch (e) {
        console.error('Error:', e);
    } finally {
        await browser.close();
    }
})();
