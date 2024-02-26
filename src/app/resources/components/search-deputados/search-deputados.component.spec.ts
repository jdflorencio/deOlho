import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDeputadosComponent } from './search-deputados.component';

describe('SearchDeputadosComponent', () => {
  let component: SearchDeputadosComponent;
  let fixture: ComponentFixture<SearchDeputadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchDeputadosComponent]
    });
    fixture = TestBed.createComponent(SearchDeputadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
