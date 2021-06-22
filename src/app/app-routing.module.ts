/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */

import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuard } from './@auth/auth.guard';
import { SalesGuard } from './@auth/sales.guard';
import { HomeComponent } from './home/home.component'

const routes: Routes = [
  {
    path: 'insured',
    canActivate: [AuthGuard],
    loadChildren: () => import('app/insured/insured.module')
      .then(m => m.InsuredModule),
  },
  {
    path: 'vendor',
    canActivate: [AuthGuard],
    loadChildren: () => import('app/vendor/vendor.module')
      .then(m => m.VendorModule),
  },
  {
    path: 'pages',
    canActivate: [AuthGuard],
    loadChildren: () => import('app/pages/pages.module')
      .then(m => m.PagesModule),
  },
  {
    path: 'auth',
    loadChildren: () => import('app/@auth/auth.module')
      .then(m => m.AuthModule),
  },
  {
    path: 'home',
    component: HomeComponent
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' },
];

const config: ExtraOptions = {
    useHash: false,
    relativeLinkResolution: 'legacy',
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
