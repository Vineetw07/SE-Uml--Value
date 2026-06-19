import asyncio
from playwright.async_api import async_playwright

async def run():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()

        base_url = "http://localhost:5173"

        print("Testing Home page...")
        await page.goto(f"{base_url}/")
        await page.wait_for_timeout(2000)
        await page.screenshot(path="screenshot_home.png", full_page=True)

        print("Testing Estimator page...")
        await page.goto(f"{base_url}/estimator")
        await page.wait_for_timeout(2000)
        await page.screenshot(path="screenshot_estimator.png", full_page=True)

        print("Testing About page...")
        await page.goto(f"{base_url}/about")
        await page.wait_for_timeout(2000)
        await page.screenshot(path="screenshot_about.png", full_page=True)

        print("Testing Contact page...")
        await page.goto(f"{base_url}/contact")
        await page.wait_for_timeout(2000)
        await page.screenshot(path="screenshot_contact.png", full_page=True)

        await browser.close()

asyncio.run(run())
