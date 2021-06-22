import { Component, OnInit,ViewChild, Input } from '@angular/core';
import { Client } from '../../@core/interfaces/common/client';
import { ContactInformation } from '../../@core/interfaces/common/contactInformation';
import { EnrollmentDetails } from '../../@core/interfaces/common/enrollmentDetails';
import { Product } from '../../@core/interfaces/common/product';
import { ProductEnrollment } from '../../@core/interfaces/common/productEnrollment';
import { EnrollmentService } from '../../@core/backend/common/services/enrollment.service'


@Component({
  selector: 'ngx-signupaccordion',
  templateUrl: './signupaccordion.component.html',
  styleUrls: ['./signupaccordion.component.scss']
})
export class SignupaccordionComponent implements OnInit {

  @ViewChild('propinfo') propInfo;
  @ViewChild('custinfo') custInfo;
  @ViewChild('paymentinfo') paymentInfo;
  @ViewChild('reviewinfo') reviewInfo;

  @Input() product: Product;

  enrollment: ProductEnrollment;

  constructor(private productEnrollmentService: EnrollmentService) { }

  ngOnInit(): void {
    this.createNewEnrollment();
    setTimeout(()=>{
      this.propInfo.toggle();
    },1000);
  }

  createNewEnrollment(){
    this.enrollment = <ProductEnrollment>{};
    this.enrollment.client = <Client>{};
    this.enrollment.client.contactInformation = <ContactInformation>{};
    this.enrollment.product = this.product;
    this.enrollment.productEnrollmentDetails = <EnrollmentDetails>{};
    this.enrollment.productEnrollmentDetails.authorizedUsers = [];
  }

  completeTransaction(){
    let validationResult = this.productEnrollmentService.validateAndNormalize(this.enrollment);
    if(validationResult.length==0){
      this.productEnrollmentService.save(this.enrollment).subscribe(x=>{
        this.showMessage('Enrollment Complete!','Your enrollment has been completed!  Thank you and happy travels!','success');
      },err =>{
        this.showMessage('Unable to save','We encountered a server issue when saving, please wait 1 minute and try again.  If the error persists, contact support','error');
        console.log(JSON.stringify(err));
      });
    }
    else{
      this.showMessage('Unable to save','There was a problem saving your enrollment.','error',validationResult);
    }
    
  }

  cancelTransaction(){
    alert('cancelling');
  }

  toggleNext(currentOp: string) {
    if(currentOp=='propertyInfo') this.custInfo.toggle();
    if(currentOp=='custInfo') this.paymentInfo.toggle();
    if(currentOp=='paymentInfo') this.reviewInfo.toggle();
    if(currentOp=='reviewInfoComplete') this.completeTransaction();
    if(currentOp=='reviewInfoCancel') this.cancelTransaction();
  }

  showMessage(messageTitle: string,messageText: string, status: string, lineItems: Array<string> = null){
    alert(messageTitle + ' | ' + messageText + ' | ' + JSON.stringify(lineItems));
  }

}
