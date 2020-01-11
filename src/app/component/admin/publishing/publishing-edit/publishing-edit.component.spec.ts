import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishingEditComponent } from './publishing-edit.component';

describe('PublishingEditComponent', () => {
  let component: PublishingEditComponent;
  let fixture: ComponentFixture<PublishingEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublishingEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishingEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
