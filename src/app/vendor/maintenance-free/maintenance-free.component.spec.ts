import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceFreeComponent } from './maintenance-free.component';

describe('MaintenanceFreeComponent', () => {
  let component: MaintenanceFreeComponent;
  let fixture: ComponentFixture<MaintenanceFreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaintenanceFreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintenanceFreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
