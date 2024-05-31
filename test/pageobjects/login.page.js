import { $ } from '@wdio/globals'
import Page from './page.js';

class LoginPage extends Page {
   
    get inputUsername () {
        return $('#user-name');
    }

    get inputPassword () {
        return $('#password');
    }

    get btnSubmit () {
        return $('#login-button');
    }

    async setUsername (username) {
        await this.inputUsername.setValue(username);
    }
    async setPassword (password) {
        await this.inputPassword.setValue(password);
    }
    async clickSubmit() {
        await this.btnSubmit.click();

    }

    open () {
        return super.open('login');
    }
}

export default new LoginPage();
