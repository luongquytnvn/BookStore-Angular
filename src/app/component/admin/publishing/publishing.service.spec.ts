import { TestBed } from '@angular/core/testing';

import { PublishingService } from './publishing.service';

describe('PublishingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PublishingService = TestBed.get(PublishingService);
    expect(service).toBeTruthy();
  });
});
