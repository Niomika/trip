import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoopingCartItemComponent } from './shooping-cart-item.component';

describe('ShoopingCartItemComponent', () => {
  let component: ShoopingCartItemComponent;
  let fixture: ComponentFixture<ShoopingCartItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoopingCartItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoopingCartItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
