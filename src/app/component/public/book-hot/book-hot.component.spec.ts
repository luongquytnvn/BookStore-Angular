import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookHotComponent } from './book-hot.component';

describe('BookHotComponent', () => {
  let component: BookHotComponent;
  let fixture: ComponentFixture<BookHotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookHotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookHotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
