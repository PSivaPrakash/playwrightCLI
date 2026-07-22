import {test} from '../fixtures/modulesFixtures.js'
import loginData from '../test_data/login.json'

test.beforeEach(async ({ page }) => {
    await page.goto('/');
});

test('Recruitmant', async ({recruitmentPage}) => {
    await recruitmentPage.recruitment()
})

