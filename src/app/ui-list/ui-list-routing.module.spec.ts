import { UiListRoutingModule } from './ui-list-routing.module';

describe('UiListRoutingModule', () => {
  let uiListRoutingModule: UiListRoutingModule;

  beforeEach(() => {
    uiListRoutingModule = new UiListRoutingModule();
  });

  it('should create an instance', () => {
    expect(uiListRoutingModule).toBeTruthy();
  });
});
