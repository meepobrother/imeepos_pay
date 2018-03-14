import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebDefaultComponent } from './web-default.component';

describe('WebDefaultComponent', () => {
  let component: WebDefaultComponent;
  let fixture: ComponentFixture<WebDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebDefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
