import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduleComponent } from './schedule.component';

import { ScheduleRoutingModule } from './schedule-routing.module';
import { MaterialModule } from 'src/app/material/material.module';

@NgModule({
  declarations: [ScheduleComponent],
  imports: [
    CommonModule,
    ScheduleRoutingModule,
    MaterialModule
  ]
})
export class ScheduleModule { }
