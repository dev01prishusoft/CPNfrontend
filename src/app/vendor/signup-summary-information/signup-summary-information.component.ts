import { Component, OnInit,Input, EventEmitter,Output } from '@angular/core';
import { ProductEnrollment } from '../../@core/interfaces/common/productEnrollment';

@Component({
  selector: 'ngx-signup-summary-information',
  templateUrl: './signup-summary-information.component.html',
  styleUrls: ['./signup-summary-information.component.scss']
})
export class SignupSummaryInformationComponent implements OnInit {

  @Input() enrollment : ProductEnrollment;
  
  @Output() toggleNext = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  generateFormOne(){
    alert('this will generate form one');
  }

  generateFormTwo(){
    alert('this will generate form two');
  }

}
