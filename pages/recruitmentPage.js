


export class Recruitment
{
    constructor(page)
    {
        this.page = page
    }

    async recruitment()
    {
        await this.page.getByText('Recruitment').first().click()
    }
}