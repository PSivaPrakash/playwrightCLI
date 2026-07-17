import { expect } from '@playwright/test'

export class SignIn {
    constructor(page)
    {
        this.page= page
        this.userNameField = page.getByPlaceholder('Username')
        this.passwordField = page.getByPlaceholder('Password')
        this.loginButtonField = page.getByRole('button', {name: ' Login '})
    }

    async browserLaunch(browser)
    {
        await this.page.goto(browser.url)
        await expect(this.page).toHaveURL(browser.url)
        await expect(this.userNameField).toBeVisible()
        await expect(this.passwordField).toBeVisible()
        await expect(this.loginButtonField).toBeEnabled()
    }

    async userLogin(userData)
    {
        await this.userNameField.fill(userData.userName)
        await this.passwordField.fill(userData.password)
        await expect(this.userNameField).toHaveValue(userData.userName)
        await expect(this.passwordField).toHaveValue(userData.password)
        await this.loginButtonField.click()
    }

    async userLogout()
    {
        await this.page.getByAltText('profile picture').first().click()
        await this.page.getByText('Logout').click()
    }
}