import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValiventaComponent } from './valiventa.component';

describe('ValiventaComponent', () => {
  let component: ValiventaComponent;
  let fixture: ComponentFixture<ValiventaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValiventaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValiventaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
