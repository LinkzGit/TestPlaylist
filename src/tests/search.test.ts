import { test, expect } from '@playwright/test';

test('Search functionality filters available tracks', async ({ page }) => {
    await page.goto('/');

    const searchInput = page.locator('//input[@id=":r0:"]');
    await searchInput.fill('Summer Breeze');

    const filteredTracks = await page.locator('//p[contains(text(),"Summer Breeze")]');
    await expect(filteredTracks).toHaveCount(1);  // Assumes 1 match for the track
    await expect(filteredTracks).toContainText('Summer Breeze');
});