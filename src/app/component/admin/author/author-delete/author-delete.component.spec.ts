import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorDeleteComponent } from './author-delete.component';

describe('AuthorDeleteComponent', () => {
  let component: AuthorDeleteComponent;
  let fixture: ComponentFixture<AuthorDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
