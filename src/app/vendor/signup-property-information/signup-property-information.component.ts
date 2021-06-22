import { Component, OnInit, Input, EventEmitter,Output } from '@angular/core';
import { ProductEnrollment } from '../../@core/interfaces/common/productEnrollment';

@Component({
  selector: 'ngx-signup-property-information',
  templateUrl: './signup-property-information.component.html',
  styleUrls: ['./signup-property-information.component.scss']
})
export class SignupPropertyInformationComponent implements OnInit {

  _enrollment: ProductEnrollment;

  radioGroupValue: string;

  get enrollment(): ProductEnrollment {
      return this._enrollment;
  }
  @Input() set enrollment(value: ProductEnrollment) {
      this._enrollment = value;
      this.updateToggles();
  }

  @Output() toggleNext = new EventEmitter();

  isMaintFree: boolean;

  isWalkaway: boolean;

  isFlyback: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  updateToggles(){
    this.isFlyback = this.enrollment.product.productName.toLowerCase().indexOf('flyback') > -1;
    this.isWalkaway = this.enrollment.product.productName.toLowerCase().indexOf('walkawa') > -1;
    this.isMaintFree = this.enrollment.product.productName.toLowerCase().indexOf('maintenan') > -1;
  }

}
