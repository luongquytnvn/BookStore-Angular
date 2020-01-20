import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookPublishingComponent } from './book-publishing.component';

describe('BookPublishingComponent', () => {
  let component: BookPublishingComponent;
  let fixture: ComponentFixture<BookPublishingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookPublishingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookPublishingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
