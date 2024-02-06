import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RxjsExampleComponent } from './rxjs-example.component';



@NgModule({
  declarations: [
    RxjsExampleComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [RxjsExampleComponent]
})
export class RxjsExampleModule { }
