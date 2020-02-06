import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookPriceComponent } from './book-price.component';

describe('BookPriceComponent', () => {
  let component: BookPriceComponent;
  let fixture: ComponentFixture<BookPriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookPriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
