import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayRootComponent } from './pay-root.component';

describe('PayRootComponent', () => {
  let component: PayRootComponent;
  let fixture: ComponentFixture<PayRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
