import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuredHomePageComponent } from './insured-home-page.component';

describe('InsuredHomePageComponent', () => {
  let component: InsuredHomePageComponent;
  let fixture: ComponentFixture<InsuredHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsuredHomePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsuredHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
