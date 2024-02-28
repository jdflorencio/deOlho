import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemListaSearchComponent } from './item-lista-search.component';

describe('ItemListaSearchComponent', () => {
  let component: ItemListaSearchComponent;
  let fixture: ComponentFixture<ItemListaSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemListaSearchComponent]
    });
    fixture = TestBed.createComponent(ItemListaSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
