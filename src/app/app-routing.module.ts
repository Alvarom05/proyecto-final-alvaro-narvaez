import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { LoginComponent } from './layouts/auth/pages/login/login.component';
import { HomeComponent } from './layouts/dashboard/pages/home/home.component';
import { UsersComponent } from './layouts/dashboard/pages/users/users.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    loadChildren: () => import('./layouts/dashboard/dashboard.module').then(
      (m) => m.DashboardModule)
  },
  // {
  //   path: 'auth/login',
  //   component: LoginComponent
  // }
  {
    path: 'auth',
    loadChildren: () => 
    import('./layouts/auth/auth.module').then((m) => m.AuthModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
