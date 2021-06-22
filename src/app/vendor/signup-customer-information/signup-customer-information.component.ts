import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { ProductEnrollment } from '../../@core/interfaces/common/productEnrollment';
import { States } from '../../@core/interfaces/common/states';


@Component({
  selector: 'ngx-signup-customer-information',
  templateUrl: './signup-customer-information.component.html',
  styleUrls: ['./signup-customer-information.component.scss']
})
export class SignupCustomerInformationComponent implements OnInit {

  statesList : Array<any> = States.getStates();

    //#endregion

  @Input() enrollment : ProductEnrollment;

  @Output() toggleNext = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }



}
