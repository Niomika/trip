import { TestBed } from '@angular/core/testing';

import { TestAndBugsDataService } from './test-and-bugs-data.service';

describe('TestAndBugsDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TestAndBugsDataService = TestBed.get(TestAndBugsDataService);
    expect(service).toBeTruthy();
  });
});
