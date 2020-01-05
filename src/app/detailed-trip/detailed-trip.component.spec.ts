import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedTripComponent } from './detailed-trip.component';

describe('DetailedTripComponent', () => {
  let component: DetailedTripComponent;
  let fixture: ComponentFixture<DetailedTripComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailedTripComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailedTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
