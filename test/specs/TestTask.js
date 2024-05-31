import LoginPage from '../pageobjects/login.page.js'
import InventoryPage from '../pageobjects/InventoryPage.js'

describe('Valid Login', () => {
    it('Enter valid login into "Login" field', async () => {
        await LoginPage.open()

        await LoginPage.setUsername ('standard_user')
    });

    it('Enter valid password into "Password" field', async () => {
        await LoginPage.setPassword ('secret_sauce')
    })

    it('Click "Login" button', async () => {
        await LoginPage.clickSubmit()

        await expect (InventoryPage.inventoryList).toBeDisplayed()
        await expect (InventoryPage.inventoryCart).toBeDisplayed()
    })
    })


