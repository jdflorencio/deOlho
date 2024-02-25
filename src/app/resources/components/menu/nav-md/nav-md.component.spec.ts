import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavMdComponent } from './nav-md.component';

describe('NavMdComponent', () => {
  let component: NavMdComponent;
  let fixture: ComponentFixture<NavMdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavMdComponent]
    });
    fixture = TestBed.createComponent(NavMdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
