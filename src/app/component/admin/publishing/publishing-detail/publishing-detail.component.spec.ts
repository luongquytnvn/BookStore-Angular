import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishingDetailComponent } from './publishing-detail.component';

describe('PublishingDetailComponent', () => {
  let component: PublishingDetailComponent;
  let fixture: ComponentFixture<PublishingDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublishingDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishingDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
