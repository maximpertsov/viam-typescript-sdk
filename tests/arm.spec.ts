import { test, expect } from '@playwright/test';

test('connects successfully', async ({ page }) => {
  page.on('console', (msg) => console.log(msg.text()));
  await page.goto('/');
  await expect(page.getByRole('paragraph')).toHaveText('Y');
});
