/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */

import { NgModule } from '@angular/core';

import { InsuredComponent } from './insured.component';
import { DashboardModule } from '../pages/dashboard/dashboard.module';
import { InsuredRoutingModule } from './insured-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { MiscellaneousModule } from '../pages/miscellaneous/miscellaneous.module';
import { PagesMenu } from '../pages/pages-menu';
import { ECommerceModule } from '../pages/e-commerce/e-commerce.module';
import { NbMenuModule } from '@nebular/theme';
import { AuthModule } from '../@auth/auth.module';
import { DepositPageComponent } from './deposit-page/deposit-page.component';
import { InsuredHomePageComponent } from './insured-home-page/insured-home-page.component';
import { EvidencePageComponent } from './evidence-page/evidence-page.component';

const INSURED_COMPONENTS = [
  InsuredComponent,
];

@NgModule({
  imports: [
    InsuredRoutingModule,
    ThemeModule,
    DashboardModule,
    ECommerceModule,
    NbMenuModule,
    MiscellaneousModule,
    AuthModule.forRoot(),
  ],
  declarations: [
    ...INSURED_COMPONENTS,
    DepositPageComponent,
    InsuredHomePageComponent,
    EvidencePageComponent,
  ],
  providers: [
    PagesMenu,
  ],
})
export class InsuredModule {
}
