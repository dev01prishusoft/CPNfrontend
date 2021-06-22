import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupCustomerInformationComponent } from './signup-customer-information.component';

describe('SignupCustomerInformationComponent', () => {
  let component: SignupCustomerInformationComponent;
  let fixture: ComponentFixture<SignupCustomerInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupCustomerInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupCustomerInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
