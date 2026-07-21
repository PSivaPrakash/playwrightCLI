import {test} from '../fixtures/modulesFixtures.js'
import loginData from '../test_data/login.json'

test.beforeEach('Login', async ({loginPage}) => {
    await loginPage.browserLaunch(loginData)
    await loginPage.userLogin(loginData)
})

test('Recruitmant', async ({recruitmentPage}) => {
    await recruitmentPage.recruitment()
})



test.afterEach('Logout', async ({loginPage}) => {
    await loginPage.userLogout()
})