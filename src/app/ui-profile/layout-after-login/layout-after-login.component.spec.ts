import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutAfterLoginComponent } from './layout-after-login.component';

describe('LayoutLoginComponent', () => {
  let component: LayoutAfterLoginComponent;
  let fixture: ComponentFixture<LayoutAfterLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutAfterLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutAfterLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
