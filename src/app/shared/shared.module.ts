import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullNamePipe } from './full-name.pipe';
import { ResaltadoDirective } from './resaltado.directive';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';




@NgModule({
  declarations: [
    FullNamePipe,
    ResaltadoDirective,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FullNamePipe, 
    ResaltadoDirective,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatDatepickerModule,
    MatCardModule,
  ]
})
export class SharedModule { }
