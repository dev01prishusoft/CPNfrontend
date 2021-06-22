import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlybackComponent } from './flyback.component';

describe('FlybackComponent', () => {
  let component: FlybackComponent;
  let fixture: ComponentFixture<FlybackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlybackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlybackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
