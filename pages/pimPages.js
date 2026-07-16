

export class pimsPage{
    constructor(page)
    {
        this.page = page
        this.pimModule = page.getByText('PIM')
        this.addEmployeeButtonField = page.getByRole('button', {name: ' Add '})

    }
    async PimModule()
    {
        await this.pimModule.click()
    }

    async addEmployee(employeeData)
    {
        await this.addEmployeeButtonField.click()
        await this.page.getByPlaceholder('First Name').fill(employeeData.firstName)
        await this.page.getByPlaceholder('Middle Name').fill(employeeData.middleName)
        await this.page.getByPlaceholder('Last Name').fill(employeeData.lastName)
        await this.page.getByRole('button', {name: ' Save '}).click()
    }
}