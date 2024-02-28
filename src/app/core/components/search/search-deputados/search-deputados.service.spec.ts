import { TestBed } from '@angular/core/testing';

import { SearchDeputadosService } from './search-deputados.service';

describe('SearchDeputadosService', () => {
  let service: SearchDeputadosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchDeputadosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
