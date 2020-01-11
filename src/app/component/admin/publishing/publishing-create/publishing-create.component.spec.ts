import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishingCreateComponent } from './publishing-create.component';

describe('PublishingCreateComponent', () => {
  let component: PublishingCreateComponent;
  let fixture: ComponentFixture<PublishingCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublishingCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishingCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
