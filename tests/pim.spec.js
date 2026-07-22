import {test} from '../fixtures/modulesFixtures.js'
import userLoginData from '../test_data/login.json'
import pimData from '../test_data/pim.json'

test.beforeEach(async ({ page }) => {
    await page.goto('/');
});


test('Create Employee @smoke', async ({pimPage}) => {
    await pimPage.PimModule()
    await pimPage.addEmployee(pimData)
})

