/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */

import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { VendorComponent } from './vendor.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { WalkawayComponent } from './walkaway/walkaway.component';
import { VendorHomePageComponent } from './vendor-home-page/vendor-home-page.component';
import { FlybackComponent } from './flyback/flyback.component';
import { MaintenanceFreeComponent } from './maintenance-free/maintenance-free.component';
import { NotFoundComponent } from '../pages/miscellaneous/not-found/not-found.component';

const routes: Routes = [{
  path: '',
  component: VendorComponent,
  children: [
    {
      path: 'home',
      component: VendorHomePageComponent,
    },
    {
      path: 'walkaway',
      component: WalkawayComponent,
    },
    {
      path: 'maintenance-free',
      component: MaintenanceFreeComponent,
    },
    {
      path: 'flyback',
      component: FlybackComponent,
    },
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
export class VendorRoutingModule {
}
