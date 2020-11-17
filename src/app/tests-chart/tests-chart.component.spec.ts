import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestsChartComponent } from './tests-chart.component';

describe('TestsChartComponent', () => {
  let component: TestsChartComponent;
  let fixture: ComponentFixture<TestsChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestsChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
