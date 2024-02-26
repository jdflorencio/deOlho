import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiSearchComponent } from './li-search.component';

describe('LiSearchComponent', () => {
  let component: LiSearchComponent;
  let fixture: ComponentFixture<LiSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LiSearchComponent]
    });
    fixture = TestBed.createComponent(LiSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
