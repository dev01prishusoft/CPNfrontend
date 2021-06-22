import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { ProductEnrollment } from '../../@core/interfaces/common/productEnrollment';

@Component({
  selector: 'ngx-signup-payment-information',
  templateUrl: './signup-payment-information.component.html',
  styleUrls: ['./signup-payment-information.component.scss']
})
export class SignupPaymentInformationComponent implements OnInit {

  @Input() enrollment : ProductEnrollment;

  @Output() toggleNext = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
