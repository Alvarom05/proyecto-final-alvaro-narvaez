import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import {MatTableModule} from '@angular/material/table';
import { UserFormComponent } from './components/user-form/user-form.component';
//Envoltura del INPUT//
import {MatFormFieldModule} from '@angular/material/form-field';
//Input//
import {MatInputModule} from '@angular/material/input';
//Select//
import {MatSelectModule} from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';







@NgModule({
  declarations: [UsersComponent, UserFormComponent],
  imports: [
    CommonModule,
    MatTableModule, 
    MatFormFieldModule, 
    MatInputModule, 
    MatSelectModule, 
    MatButtonModule,
    ReactiveFormsModule,
  ],
  exports: [UsersComponent]
})
export class UsersModule { }
