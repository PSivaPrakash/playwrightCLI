import {test} from '../fixtures/modulesFixtures.js'
import userLoginData from '../test_data/login.json'
import pimData from '../test_data/pim.json'

test.beforeEach('Login', async ({loginPage}) => {
    await loginPage.browserLaunch(userLoginData)
    await loginPage.userLogin(userLoginData)
})


test('Basic Test', async ({pimPage}) => {
    await pimPage.PimModule()
    await pimPage.addEmployee(pimData)
})