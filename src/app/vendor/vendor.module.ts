/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */

import { NgModule } from '@angular/core';

import { VendorComponent } from './vendor.component';
import { VendorRoutingModule } from './vendor-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { MiscellaneousModule } from '../pages/miscellaneous/miscellaneous.module';
import { PagesMenu } from '../pages/pages-menu';
import { NbMenuModule } from '@nebular/theme';
import { AuthModule } from '../@auth/auth.module';
import { VendorHomePageComponent } from './vendor-home-page/vendor-home-page.component';
import { WalkawayComponent } from './walkaway/walkaway.component';
import { FlybackComponent } from './flyback/flyback.component';
import { MaintenanceFreeComponent } from './maintenance-free/maintenance-free.component';
import { SignupaccordionComponent } from './signupaccordion/signupaccordion.component';
import { FormsModule } from '@angular/forms';


import {
  NbAccordionModule,
  NbButtonModule,
  NbCardModule,
  NbSelectModule,
  NbLayoutModule,
  NbRadioModule,
  NbIconModule,
  NbActionsModule
} from '@nebular/theme';
import { SignupPropertyInformationComponent } from './signup-property-information/signup-property-information.component';
import { SignupCustomerInformationComponent } from './signup-customer-information/signup-customer-information.component';
import { SignupPaymentInformationComponent } from './signup-payment-information/signup-payment-information.component';
import { SignupSummaryInformationComponent } from './signup-summary-information/signup-summary-information.component';
import { AuthorizedUsersComponent } from './authorized-users/authorized-users.component';

const VENDOR_COMPONENTS = [
  VendorComponent,
];

@NgModule({
  imports: [
    VendorRoutingModule,
    NbSelectModule,
    ThemeModule,
    FormsModule,
    NbMenuModule,
    NbLayoutModule,
    NbActionsModule,
    NbAccordionModule,
    NbButtonModule,
    NbCardModule,
    NbIconModule,
    MiscellaneousModule,
    AuthModule.forRoot(),
  ],
  declarations: [
    ...VENDOR_COMPONENTS,
    VendorHomePageComponent,
    WalkawayComponent,
    FlybackComponent,
    MaintenanceFreeComponent,
    SignupaccordionComponent,
    SignupPropertyInformationComponent,
    SignupCustomerInformationComponent,
    SignupPaymentInformationComponent,
    SignupSummaryInformationComponent,
    AuthorizedUsersComponent,
  ],
  providers: [
    PagesMenu,
  ],
})
export class VendorModule {
}
