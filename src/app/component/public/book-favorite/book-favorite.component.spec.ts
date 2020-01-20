import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookFavoriteComponent } from './book-favorite.component';

describe('BookFavoriteComponent', () => {
  let component: BookFavoriteComponent;
  let fixture: ComponentFixture<BookFavoriteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookFavoriteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookFavoriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
