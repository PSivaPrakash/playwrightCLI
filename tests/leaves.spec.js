import {test} from '../fixtures/modulesFixtures.js'


test.beforeEach(async ({ page }) => {
    await page.goto('/');
});


test('Leaves Page @regression', async ({leavesPage}) => {
    await leavesPage.Leaves()
})
