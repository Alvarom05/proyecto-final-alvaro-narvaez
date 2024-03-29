import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardModule } from './layouts/dashboard/dashboard.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import { registerLocaleData } from '@angular/common';

import es from '@angular/common/locales/es';
import esAR from '@angular/common/locales/es-AR';
import{ MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoadingService } from './core/services/loading.service';



registerLocaleData(es);
registerLocaleData(esAR);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DashboardModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'es-AR',
    },

    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: {
        appearance: 'outline'
      }
    },
    // {
    //   provide: LoadingService,
    //   useValue: {
        
    //   }
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
