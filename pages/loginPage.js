import { expect } from '@playwright/test'

export class SignIn {
    constructor(page)
    {
        this.page= page
        this.userNameField = page.getByPlaceholder('Username')
        this.passwordField = page.getByPlaceholder('Password')
        this.loginButtonField = page.getByRole('button', {name: ' Login '})
    }

    async browserLaunch()
    {
        await this.page.goto('auth/login')
        console.log('Current URL:', this.page.url())
        await expect(this.page).toHaveURL(/.*\/auth\/login$/)
        await expect(this.userNameField).toBeVisible()
        await expect(this.passwordField).toBeVisible()
        await expect(this.loginButtonField).toBeEnabled()
    }

    async userLogin()
    {
        await this.userNameField.fill(process.env.ORANGEHRM_USERNAME)
        await this.passwordField.fill(process.env.ORANGEHRM_PASSWORD)
        await expect(this.userNameField).toHaveValue(process.env.ORANGEHRM_USERNAME)
        await expect(this.passwordField).toHaveValue(process.env.ORANGEHRM_PASSWORD)
        await this.loginButtonField.click()
    }

    async userLogout()
    {
        await this.page.getByAltText('profile picture').first().click()
        await this.page.getByText('Logout').click()
    }
}