import asyncio
from playwright.async_api import async_playwright

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()

        # Capture Home
        await page.goto('http://localhost:5173/')
        # wait a second for framer motion to finish entry animation
        await asyncio.sleep(1)
        await page.screenshot(path='home.png', full_page=True)

        # Capture Estimator
        await page.goto('http://localhost:5173/estimate')
        await asyncio.sleep(1)
        await page.screenshot(path='estimator.png', full_page=True)

        # Capture About
        await page.goto('http://localhost:5173/about')
        await asyncio.sleep(1)
        await page.screenshot(path='about.png', full_page=True)

        await browser.close()

asyncio.run(main())
