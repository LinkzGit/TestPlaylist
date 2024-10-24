import { test, expect } from '@playwright/test';

test('Add multiple tracks using checkboxes', async ({ page }) => {
    await page.goto('/');

    const track1Checkbox = page.locator('//body/div[@id="root"]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/span[1]/input[1]');
    const track2Checkbox = page.locator('//body/div[@id="root"]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/span[1]/input[1]');

    await track1Checkbox.check();
    await track2Checkbox.check();

    const addMultipleTracksButton = page.locator('//button[contains(text(),"Add 2 tracks")]');
    await addMultipleTracksButton.click();

    const playlist = page.locator('//p[contains(text(),"Your playlist")]');
    await expect(playlist).toHaveValues;
});