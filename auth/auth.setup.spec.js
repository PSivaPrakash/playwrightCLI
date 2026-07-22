import { test, expect } from '@playwright/test'
import { SignIn } from '../pages/loginPage'
import userLoginData from '../test_data/login.json'

test('Authenticate User', async ({ browser }) => {
    const context = await browser.newContext()
    const page = await context.newPage()
    const loginPage = new SignIn(page)
    await loginPage.browserLaunch()
    await loginPage.userLogin(userLoginData)
    await expect(page).toHaveURL(/.*\/dashboard\/index$/)
    await context.storageState({ path: 'playwright/.auth/user.json' })
});