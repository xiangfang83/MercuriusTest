import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { MatButtonModule } from '@angular/material/button';
import { MaterialModule } from './material/material.module';
import { AmazingTimePickerModule } from 'amazing-time-picker';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MaterialModule,
    FlexLayoutModule,
    AmazingTimePickerModule,
    NgxMaterialTimepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
