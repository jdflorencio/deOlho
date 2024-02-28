import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaSearchComponent } from './lista-search.component';

describe('ListaSearchComponent', () => {
  let component: ListaSearchComponent;
  let fixture: ComponentFixture<ListaSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaSearchComponent]
    });
    fixture = TestBed.createComponent(ListaSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
