import { JbrssUiPage } from './app.po';

describe('jbrss-ui App', function() {
  let page: JbrssUiPage;

  beforeEach(() => {
    page = new JbrssUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
