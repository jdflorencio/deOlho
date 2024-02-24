import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavDefaultComponent } from './nav-default.component';

describe('NavDefaultComponent', () => {
  let component: NavDefaultComponent;
  let fixture: ComponentFixture<NavDefaultComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavDefaultComponent]
    });
    fixture = TestBed.createComponent(NavDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
