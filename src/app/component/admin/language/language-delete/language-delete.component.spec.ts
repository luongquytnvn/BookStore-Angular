import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageDeleteComponent } from './language-delete.component';

describe('LanguageDeleteComponent', () => {
  let component: LanguageDeleteComponent;
  let fixture: ComponentFixture<LanguageDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanguageDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguageDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
