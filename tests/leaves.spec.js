import {test} from '../fixtures/modulesFixtures.js'
import userLoginData from '../test_data/login.json'


test.beforeEach(async ({ page }) => {
    await page.goto('/');
});


test('Leaves Page @regression', async ({leavesPage}) => {
    await leavesPage.Leaves()
})
