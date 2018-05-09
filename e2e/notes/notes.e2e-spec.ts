import { NotesPage } from './notes.po';
import { browser, Ptor, protractor } from 'protractor';

describe('notes-app Notes', () => {
  let page: NotesPage;

  beforeEach(() => {
    page = new NotesPage();
  });

  it('notes test with new note ', () => {
    page.navigateTo();
    page.getTitle().sendKeys('test');
    page.getContent().sendKeys('test');
    page.getSubmit().click();
    browser.wait(protractor.ExpectedConditions.presenceOf(page.getSpan('test')), 5000);
    browser.waitForAngular();
    expect(page.getSpan('test').getText()).toEqual('test');
  });
});
