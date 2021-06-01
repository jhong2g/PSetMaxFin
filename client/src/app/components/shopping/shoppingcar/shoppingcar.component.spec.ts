import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingcarComponent } from './shoppingcar.component';

describe('ShoppingcarComponent', () => {
  let component: ShoppingcarComponent;
  let fixture: ComponentFixture<ShoppingcarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingcarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingcarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
