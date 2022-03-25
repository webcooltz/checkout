import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin/admin.component';
import { MenuAdminDetailComponent } from './admin/menu-admin/menu-admin-detail/menu-admin-detail.component';
import { MenuAdminEditComponent } from './admin/menu-admin/menu-admin-edit/menu-admin-edit.component';
import { MenuAdminStartComponent } from './admin/menu-admin/menu-admin-start/menu-admin-start.component';
import { MenuAdminComponent } from './admin/menu-admin/menu-admin.component';
import { LandingComponent } from './landing/landing.component';
import { OrderHistoryComponent } from './landing/order-history/order-history.component';
import { OrderQueueComponent } from './landing/order-queue/order-queue.component';
import { LoginComponent } from './user/login/login.component';
import { SignupComponent } from './user/signup/signup.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  { path: 'landing', component: LandingComponent},
  { path: 'admin', component: AdminComponent },
  { path: 'menu-admin', component: MenuAdminComponent, children: [
    { path: '', component: MenuAdminStartComponent },
    { path: 'menu-admin-detail', component: MenuAdminDetailComponent },
    { path: ':id', component: MenuAdminEditComponent },
    { path: 'new', component: MenuAdminEditComponent }
  ] },
  { path: 'queue', component: OrderQueueComponent },
  { path: 'history', component: OrderHistoryComponent },
  { path: 'settings', component: UserComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
