import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../api/http.service';
import { Product } from '../../../interfaces/common/product';
import { ProductEnrollment } from '../../../interfaces/common/productEnrollment';

@Injectable()
export class EnrollmentService {
  private readonly apiController: string = 'productenrollment';

  constructor(private api: HttpService) {}

  getAll(): Observable<Array<ProductEnrollment>> {
    return this.api.get(`${this.apiController}/`);
  }

  save(enrollment: ProductEnrollment): Observable<ProductEnrollment>{
    return this.api.post(`${this.apiController}/`,enrollment);
  }

  validateAndNormalize(enrollment: ProductEnrollment) : Array<string>{
    let errors: Array<string> = [];

    if(!enrollment.client){
        errors.push('Client information was not added.  Please enter prior to saving.');
    }
    else if(!enrollment.client.contactInformation)
    {
        errors.push('Contact information was not entered.  Please enter prior to saving.');
    }
    else
    {
      if(!enrollment.client.contactInformation.firstName || !enrollment.client.contactInformation.lastName){ errors.push('Owner One first and last name required.  Please enter prior to saving.'); }
      if(!enrollment.client.contactInformation.addressLine1 || !enrollment.client.contactInformation.cityName || !enrollment.client.contactInformation.postalCode){ 
          errors.push('Address infromation required.  Please enter prior to saving.'); 
      }
      if(!enrollment.client.contactInformation.homePhoneNumber){
          errors.push('Phone number required.  Please enter prior to saving.'); 
      }
      if(!enrollment.client.contactInformation.emailAddress){
        errors.push('Email address required.  Please enter prior to saving.'); 
      }
      //validate contact information
      if(!enrollment.client.ownerOneName){ enrollment.client.ownerOneName = enrollment.client.contactInformation.firstName + ' ' + enrollment.client.contactInformation.lastName; }
    }
    
    return errors;

  }

}