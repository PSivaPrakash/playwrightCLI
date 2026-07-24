import {test} from '../fixtures/modulesFixtures.js'

test.beforeEach(async ({ page }) => {
    await page.goto('/');
});

test('Recruitmant', async ({recruitmentPage}) => {
    await recruitmentPage.recruitment()
})

