import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentDeleteComponent } from './payment-delete.component';

describe('PaymentDeleteComponent', () => {
  let component: PaymentDeleteComponent;
  let fixture: ComponentFixture<PaymentDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
