import { browser, by, element } from 'protractor';

export class AngularNgrxMaterialStarterPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('di-root h1')).getText();
  }
}
