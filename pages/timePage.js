

export class Time 
{
    constructor(page)
    {
        this.page = page
    }

    async time()
    {
        await this.page.getByText('Time').first().click()
    }
}