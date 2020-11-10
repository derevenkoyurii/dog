import { browser, logging } from 'protractor';
import { Page } from './app.po';

describe('App', () => {
  let page: Page;

  beforeEach(() => {
    page = new Page();
  });

  it('should display Welcome message', () => {
    page.navigateTo();
  });

  afterEach(async () => {
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);

    expect(logs).not.toContain(
      jasmine.objectContaining({ level: logging.Level.SEVERE } as logging.Entry),
    );
  });
});
