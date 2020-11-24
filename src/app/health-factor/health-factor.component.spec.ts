import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthFactorComponent } from './health-factor.component';

describe('HealthFactorComponent', () => {
  let component: HealthFactorComponent;
  let fixture: ComponentFixture<HealthFactorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthFactorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthFactorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
