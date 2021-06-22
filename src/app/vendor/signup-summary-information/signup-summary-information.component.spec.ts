import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupSummaryInformationComponent } from './signup-summary-information.component';

describe('SignupSummaryInformationComponent', () => {
  let component: SignupSummaryInformationComponent;
  let fixture: ComponentFixture<SignupSummaryInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupSummaryInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupSummaryInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
