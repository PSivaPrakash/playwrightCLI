import {test as base} from '../fixtures/loginFixture.js'
import {pimsPage} from '../pages/pimPages.js'
import {EmployeeLeave} from '../pages/leavePage.js'


export let test = base.extend({
    pimPage: async ({page},use) => {
        let pimData = new pimsPage(page)
        await use(pimData)
    },
   leavesPage: async ({page}, use) => {
    let leavesData = new EmployeeLeave(page)
    await use(leavesData)
   }
})