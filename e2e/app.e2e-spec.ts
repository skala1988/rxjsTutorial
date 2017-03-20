import { RxjsOperatorsPage } from './app.po';

describe('rxjs-operators App', () => {
  let page: RxjsOperatorsPage;

  beforeEach(() => {
    page = new RxjsOperatorsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
