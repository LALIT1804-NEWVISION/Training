// tests/amazon.spec.ts
import { test, expect, Page } from '@playwright/test';

test('Amazon homepage loads', async ({ page }: { page: Page }) => {
  await page.goto('https://www.amazon.in/');
  await expect(page).toHaveTitle(/Amazon/);
});

test('Search product on Amazon', async ({ page }: { page: Page }) => {
  await page.goto('https://www.amazon.in/');
  await page.fill('#twotabsearchtextbox', 'iPhone');
  await page.keyboard.press('Enter');
  await page.waitForSelector('div.s-main-slot');
  await expect(page).toHaveURL(/s\?/);
});