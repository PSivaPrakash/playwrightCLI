

export class EmployeeLeave
{
    constructor(page)
    {
        this.page = page

    }
    async Leaves()
    {
        await this.page.getByText('Leave').first().click()
    }
}