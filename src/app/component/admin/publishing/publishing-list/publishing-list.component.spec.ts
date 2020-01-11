import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishingListComponent } from './publishing-list.component';

describe('PublishingListComponent', () => {
  let component: PublishingListComponent;
  let fixture: ComponentFixture<PublishingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublishingListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
