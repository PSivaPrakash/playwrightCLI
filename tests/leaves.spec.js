import {test} from '../fixtures/modulesFixtures.js'
import userLoginData from '../test_data/login.json'


test.beforeEach('Login', async ({loginPage}) => {
    await loginPage.browserLaunch(userLoginData)
    await loginPage.userLogin(userLoginData)
})


test('Leaves Page @regression', async ({leavesPage}) => {
    await leavesPage.Leaves()
})

test.afterEach('Logout User', async ({loginPage}) => {
    await loginPage.userLogout()
})