import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookPublicComponent } from './book-public.component';

describe('BookPublicComponent', () => {
  let component: BookPublicComponent;
  let fixture: ComponentFixture<BookPublicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookPublicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookPublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
