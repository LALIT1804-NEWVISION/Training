// tests/amazon.spec.ts
import { test, expect, Page } from '@playwright/test';

test('Amazon homepage loads', async ({ page }: { page: Page }) => {
  await page.goto('https://www.amazon.in/');
  await expect(page).toHaveTitle(/Amazon/);
xyz
  
});

test('Search product on Amazon', async ({ page }: { page: Page }) => {
  await page.goto('https://www.amazon.in/', { waitUntil: 'networkidle' });
  await page.waitForSelector('#twotabsearchtextbox', { timeout: 10000 });
  await page.fill('#twotabsearchtextbox', 'iPhone', { timeout: 10000 });
  await page.keyboard.press('Enter');
  await page.waitForSelector('div.s-main-slot', { timeout: 10000 });
  await expect(page).toHaveURL(/s\?/);
});
