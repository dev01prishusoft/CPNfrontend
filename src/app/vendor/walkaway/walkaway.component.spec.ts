import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalkawayComponent } from './walkaway.component';

describe('WalkawayComponent', () => {
  let component: WalkawayComponent;
  let fixture: ComponentFixture<WalkawayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WalkawayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WalkawayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
