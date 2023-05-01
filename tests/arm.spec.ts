import { test, expect } from '@playwright/test';

test('connects successfully', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('paragraph')).toHaveText(
    /Connection status: .../
  );
  await expect(page.getByRole('paragraph')).toHaveText(
    /Connection status: success!/
  );
});
