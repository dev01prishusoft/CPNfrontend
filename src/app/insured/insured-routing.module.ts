/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */

import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { InsuredComponent } from './insured.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { DepositPageComponent } from './deposit-page/deposit-page.component';
import { InsuredHomePageComponent } from './insured-home-page/insured-home-page.component';
import { EvidencePageComponent } from './evidence-page/evidence-page.component';
import { NotFoundComponent } from '../pages/miscellaneous/not-found/not-found.component';

const routes: Routes = [{
  path: '',
  component: InsuredComponent,
  children: [
    {
      path: 'home',
      component: InsuredHomePageComponent,
    },
    {
      path: 'deposit',
      component: DepositPageComponent,
    },
    {
      path: 'evidence',
      component: EvidencePageComponent,
    },
    ,
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InsuredRoutingModule {
}
