import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAndFixedChartComponent } from './new-and-fixed-chart.component';

describe('NewAndFixedChartComponent', () => {
  let component: NewAndFixedChartComponent;
  let fixture: ComponentFixture<NewAndFixedChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewAndFixedChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAndFixedChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
