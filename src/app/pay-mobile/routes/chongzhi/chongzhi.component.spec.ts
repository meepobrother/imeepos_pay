import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChongzhiComponent } from './chongzhi.component';

describe('ChongzhiComponent', () => {
  let component: ChongzhiComponent;
  let fixture: ComponentFixture<ChongzhiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChongzhiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChongzhiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
