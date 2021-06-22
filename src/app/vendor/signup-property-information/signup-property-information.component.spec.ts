import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupPropertyInformationComponent } from './signup-property-information.component';

describe('SignupPropertyInformationComponent', () => {
  let component: SignupPropertyInformationComponent;
  let fixture: ComponentFixture<SignupPropertyInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupPropertyInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupPropertyInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
