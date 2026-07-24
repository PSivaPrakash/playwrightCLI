import {test} from '../fixtures/modulesFixtures.js'

test.beforeEach(async ({ page }) => {
    await page.goto('/');
});

test('Time', async ({timePage}) => {
    await timePage.time()
})
