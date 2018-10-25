import { UiProfileModule } from './ui-profile.module';

describe('UiProfileModule', () => {
  let uiProfileModule: UiProfileModule;

  beforeEach(() => {
    uiProfileModule = new UiProfileModule();
  });

  it('should create an instance', () => {
    expect(uiProfileModule).toBeTruthy();
  });
});
