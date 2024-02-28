import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentItemSearchComponent } from './ContentItemSearchComponent';

describe('ContentItemSearchComponent', () => {
  let component: ContentItemSearchComponent;
  let fixture: ComponentFixture<ContentItemSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContentItemSearchComponent]
    });
    fixture = TestBed.createComponent(ContentItemSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
