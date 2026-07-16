import {test} from '../fixtures/loginFixture.js'
import userLoginData from '../test_data/login.json'


test('Basic Test', async ({loginPage}) => {
    console.log('Success')
    await loginPage.browserLaunch(userLoginData)
    await loginPage.userLogin(userLoginData)
})