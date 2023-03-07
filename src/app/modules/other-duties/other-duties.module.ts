import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OtherDutiesComponent } from './other-duties.component';

import { OtherDutiesRoutingModule } from './other-duties-routing.module';
import { MaterialModule } from 'src/app/material/material.module';

@NgModule({
  declarations: [OtherDutiesComponent],
  imports: [
    CommonModule,
    OtherDutiesRoutingModule,
    MaterialModule
  ]
})
export class OtherDutiesModule { }
