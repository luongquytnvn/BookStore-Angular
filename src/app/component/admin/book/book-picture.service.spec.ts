import { TestBed } from '@angular/core/testing';

import { BookPictureService } from './book-picture.service';

describe('BookPictureService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BookPictureService = TestBed.get(BookPictureService);
    expect(service).toBeTruthy();
  });
});
