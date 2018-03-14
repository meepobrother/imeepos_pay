import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApyRootComponent } from './apy-root.component';

describe('ApyRootComponent', () => {
  let component: ApyRootComponent;
  let fixture: ComponentFixture<ApyRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApyRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApyRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
