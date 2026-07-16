import {test as base} from '../fixtures/loginFixture.js'
import {pimsPage} from '../pages/pimPages.js'


export let test = base.extend({
    pimPage: async ({page},use) => {
        let pimData = new pimsPage(page)
        await use(pimData)
    }
})