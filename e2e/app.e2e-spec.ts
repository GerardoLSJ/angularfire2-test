import { TwPage } from './app.po';

describe('tw App', function() {
  let page: TwPage;

  beforeEach(() => {
    page = new TwPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
