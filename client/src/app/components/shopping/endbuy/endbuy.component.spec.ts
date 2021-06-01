import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndbuyComponent } from './endbuy.component';

describe('EndbuyComponent', () => {
  let component: EndbuyComponent;
  let fixture: ComponentFixture<EndbuyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EndbuyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EndbuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
