import { TestBed } from '@angular/core/testing';

import { TemperatureDisplayService } from './temperature-display.service';

describe('TemperatureDisplayService', () => {
  let service: TemperatureDisplayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TemperatureDisplayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
