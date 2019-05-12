import { TestBed } from '@angular/core/testing';

import { DataclearService } from './dataclear.service';

describe('DataclearService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataclearService = TestBed.get(DataclearService);
    expect(service).toBeTruthy();
  });
});
