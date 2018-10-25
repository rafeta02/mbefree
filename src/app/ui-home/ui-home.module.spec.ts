import { UiHomeModule } from './ui-home.module';

describe('UiHomeModule', () => {
  let uiHomeModule: UiHomeModule;

  beforeEach(() => {
    uiHomeModule = new UiHomeModule();
  });

  it('should create an instance', () => {
    expect(uiHomeModule).toBeTruthy();
  });
});
