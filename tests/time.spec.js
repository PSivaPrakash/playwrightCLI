import {test} from '../fixtures/modulesFixtures.js'
import loginData from '../test_data/login.json'

test.beforeEach(async ({ page }) => {
    await page.goto('/');
});

test('Time', async ({timePage}) => {
    await timePage.time()
})
