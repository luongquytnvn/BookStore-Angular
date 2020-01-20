import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookLanguageComponent } from './book-language.component';

describe('BookLanguageComponent', () => {
  let component: BookLanguageComponent;
  let fixture: ComponentFixture<BookLanguageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookLanguageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookLanguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
