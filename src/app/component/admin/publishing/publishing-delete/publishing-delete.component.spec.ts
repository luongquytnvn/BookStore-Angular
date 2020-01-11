import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishingDeleteComponent } from './publishing-delete.component';

describe('PublishingDeleteComponent', () => {
  let component: PublishingDeleteComponent;
  let fixture: ComponentFixture<PublishingDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublishingDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishingDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
