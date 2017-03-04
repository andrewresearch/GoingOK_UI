import { GoingOKUIPage } from './app.po';

describe('going-ok-ui App', function() {
  let page: GoingOKUIPage;

  beforeEach(() => {
    page = new GoingOKUIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
