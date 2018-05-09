import { browser, by, element } from 'protractor';

export class NotesPage {

    

    navigateTo() {
        return browser.get('/notes');
    }

    getTitle() {
        return element(by.css('input'));
    }
    
    getContent() {
        return element(by.css('textarea'));
    }

    getSubmit() {
        return element(by.css('button'));
    }

    getSpan(title: string) {
        return element(by.cssContainingText('.title', title));
    }
}
