import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupPaymentInformationComponent } from './signup-payment-information.component';

describe('SignupPaymentInformationComponent', () => {
  let component: SignupPaymentInformationComponent;
  let fixture: ComponentFixture<SignupPaymentInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupPaymentInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupPaymentInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
