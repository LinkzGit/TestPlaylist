import { test, expect } from '@playwright/test';

test('Add single track using "+" button', async ({ page }) => {
    await page.goto('/');

    const addButton = page.locator('//body/div[@id="root"]/div[1]/div[1]/div[2]/div[1]/div[1]/button[1]');
    await addButton.click();

    const yourPlaylist = page.locator('//p[contains(text(),"Your playlist")]');
    await expect(yourPlaylist).toHaveValues;
});