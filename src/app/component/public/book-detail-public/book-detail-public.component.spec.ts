import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDetailPublicComponent } from './book-detail-public.component';

describe('BookDetailPublicComponent', () => {
  let component: BookDetailPublicComponent;
  let fixture: ComponentFixture<BookDetailPublicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookDetailPublicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookDetailPublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
