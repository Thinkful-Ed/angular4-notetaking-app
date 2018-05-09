import { LoginPage } from './login.po';
import { browser, Ptor, protractor } from 'protractor';

describe('notes-app Login', () => {
  let page: LoginPage;

  beforeEach(() => {
    page = new LoginPage();
  });

  it('login test with correct credentials: link to notes page', () => {
    page.navigateTo();
    page.getLogin_UserName().sendKeys('song');
    page.getLogin_Password().sendKeys('Song123#');
    page.getLogin_Submit().click();
    browser.wait(protractor.ExpectedConditions.urlContains('/notes'), 5000);
    browser.waitForAngular();
    expect(browser.getCurrentUrl()).toContain('/notes');
  });
});
