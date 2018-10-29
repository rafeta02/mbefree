import { UiListModule } from './ui-list.module';

describe('UiListModule', () => {
  let uiListModule: UiListModule;

  beforeEach(() => {
    uiListModule = new UiListModule();
  });

  it('should create an instance', () => {
    expect(uiListModule).toBeTruthy();
  });
});
