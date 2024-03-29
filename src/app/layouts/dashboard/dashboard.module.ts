import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { UsersModule } from './pages/users/users.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import { PipesModule } from './pages/pipes/pipes.module';
import { RxjsExampleComponent } from './pages/rxjs-example/rxjs-example.component';
import { RxjsExampleModule } from './pages/rxjs-example/rxjs-example.module';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UsersComponent } from './pages/users/users.component';
import {MatListModule} from '@angular/material/list';








@NgModule({
  declarations: [
    DashboardComponent,
    
  ],
  imports: [
    CommonModule,
    MatSidenavModule, 
    MatButtonModule, 
    MatToolbarModule, 
    MatIconModule,
    UsersModule,
    MatFormFieldModule,
    PipesModule,
    RxjsExampleModule,
    MatListModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'users',
        loadChildren: () => 
        import('./pages/users/users.module').then((m) => m.UsersModule)
      }
    ]),
  ],
  exports:[DashboardComponent],
})
export class DashboardModule {
  
}
