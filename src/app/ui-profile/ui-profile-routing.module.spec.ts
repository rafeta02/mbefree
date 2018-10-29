import { UiProfileRoutingModule } from './ui-profile-routing.module';

describe('UiProfileRoutingModule', () => {
  let uiProfileRoutingModule: UiProfileRoutingModule;

  beforeEach(() => {
    uiProfileRoutingModule = new UiProfileRoutingModule();
  });

  it('should create an instance', () => {
    expect(uiProfileRoutingModule).toBeTruthy();
  });
});
