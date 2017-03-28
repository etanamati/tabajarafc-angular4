import { TabajarafcPage } from './app.po';

describe('tabajarafc App', () => {
  let page: TabajarafcPage;

  beforeEach(() => {
    page = new TabajarafcPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
