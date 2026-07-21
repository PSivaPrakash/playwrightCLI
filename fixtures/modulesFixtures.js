import {test as base} from '../fixtures/loginFixture.js'
import {pimsPage} from '../pages/pimPages.js'
import {EmployeeLeave} from '../pages/leavePage.js'
import {Time} from '../pages/timePage.js'
import {Recruitment} from '../pages/recruitmentPage.js'


export let test = base.extend({
    pimPage: async ({page},use) => {
        let pimData = new pimsPage(page)
        await use(pimData)
    },
   leavesPage: async ({page}, use) => {
    let leavesData = new EmployeeLeave(page)
    await use(leavesData)
   },
   timePage: async ({page}, use) => {
    let employeeTime = new Time(page)
    await use(employeeTime)
   },
   recruitmentPage: async ({page}, use) => {
    let employeeRecruitment = new Recruitment(page)
    await use(employeeRecruitment)
   }
})