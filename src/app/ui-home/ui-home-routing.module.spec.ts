import { UiHomeRoutingModule } from './ui-home-routing.module';

describe('UiHomeRoutingModule', () => {
  let uiHomeRoutingModule: UiHomeRoutingModule;

  beforeEach(() => {
    uiHomeRoutingModule = new UiHomeRoutingModule();
  });

  it('should create an instance', () => {
    expect(uiHomeRoutingModule).toBeTruthy();
  });
});
