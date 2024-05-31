import { $ } from '@wdio/globals'
import Page from './page.js';

class InventoryPage extends Page {

    get inventoryList () {
        return $('#inventory_container');
    }
    get inventoryCart(){
        return $('#shopping_cart_container')
    }
}

export default new InventoryPage();
