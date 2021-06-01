import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListVentasComponent } from './list-ventas.component';

describe('ListVentasComponent', () => {
  let component: ListVentasComponent;
  let fixture: ComponentFixture<ListVentasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListVentasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListVentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
