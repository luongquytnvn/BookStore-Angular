import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderAdminListComponent } from './order-admin-list.component';

describe('OrderAdminListComponent', () => {
  let component: OrderAdminListComponent;
  let fixture: ComponentFixture<OrderAdminListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderAdminListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderAdminListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
