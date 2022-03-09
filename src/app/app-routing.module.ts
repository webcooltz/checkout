import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin/admin.component';
import { LandingComponent } from './landing/landing.component';
import { OrderHistoryComponent } from './landing/order-history/order-history.component';
import { OrderQueueComponent } from './landing/order-queue/order-queue.component';

const routes: Routes = [
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  { path: 'landing', component: LandingComponent},
  { path: 'admin', component: AdminComponent },
  { path: 'queue', component: OrderQueueComponent },
  { path: 'history', component: OrderHistoryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
