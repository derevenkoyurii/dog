import { browser } from 'protractor';

export class Page {
  navigateTo(): Promise<any> {
    return browser.get('/') as Promise<any>;
  }
}
