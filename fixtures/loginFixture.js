import {test as base} from '@playwright/test'
import {SignIn} from '../pages/loginPage.js'

export let test = base.extend({
    loginPage: async ({page}, use) => {
        let userLogin = new SignIn(page)
        await use(userLogin)
    }
})