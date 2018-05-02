import { browser, by, element } from 'protractor';

export class LoginPage {
    private login_username = element(by.id("username1"));
    private login_password = element(by.id("password1"));
    private login_submit = element(by.id('submit1'));

    private register_username = element(by.id("username2"));
    private register_password = element(by.id("password2"));
    private register_fullname = element(by.id('fullname2'));
    private register_submit = element(by.id("submit2"));
    

    navigateTo() {
        return browser.get('/login');
    }

    getLogin_UserName() {
        return this.login_username;
    }
    getLogin_Password() {
        return this.login_password;
    }
    getLogin_Submit() {
        return this.login_submit;
    }
    
    getRegister_UserName() {
        return this.register_username;
    }
    getRegister_Password() {
        return this.register_password;
    }
    getRegister_FullName() {
        return this.register_fullname;
    }
    getRegister_Submit() {
        return this.register_submit;
    }
    
}
