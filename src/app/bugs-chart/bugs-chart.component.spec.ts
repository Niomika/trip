import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BugsChartComponent } from './bugs-chart.component';

describe('BugsChartComponent', () => {
  let component: BugsChartComponent;
  let fixture: ComponentFixture<BugsChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BugsChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BugsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
