import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupaccordionComponent } from './signupaccordion.component';

describe('SignupaccordionComponent', () => {
  let component: SignupaccordionComponent;
  let fixture: ComponentFixture<SignupaccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupaccordionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupaccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
