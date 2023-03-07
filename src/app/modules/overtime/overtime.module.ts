import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OvertimeComponent } from './overtime.component';

import { OvertimeRoutingModule } from './overtime-routing.module';
import { MaterialModule } from 'src/app/material/material.module';

@NgModule({
  declarations: [OvertimeComponent],
  imports: [
    CommonModule,
    OvertimeRoutingModule,
    MaterialModule
  ]
})
export class OvertimeModule { }
