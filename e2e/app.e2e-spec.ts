import { Ng4SamplePage } from './app.po';

describe('ng4-sample App', () => {
  let page: Ng4SamplePage;

  beforeEach(() => {
    page = new Ng4SamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
