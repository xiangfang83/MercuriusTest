import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduleWrapperComponent, DialogAnnualLeaveRequest } from './schedule.component';

import { ScheduleRoutingModule } from './schedule-routing.module';
import { MaterialModule } from 'src/app/material/material.module';
import { ScheduleModule } from '@syncfusion/ej2-angular-schedule';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { ContextMenuModule } from '@syncfusion/ej2-angular-navigations';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AmazingTimePickerModule } from 'amazing-time-picker';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
@NgModule({
  declarations: [ScheduleWrapperComponent, DialogAnnualLeaveRequest],
  imports: [
    CommonModule,
    ScheduleRoutingModule,
    MaterialModule,
    ScheduleModule,
    ButtonModule,
    ContextMenuModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    AmazingTimePickerModule,
    NgxMaterialTimepickerModule
  ],
  entryComponents: [DialogAnnualLeaveRequest]
})
export class ScheduleWrapperModule { }
