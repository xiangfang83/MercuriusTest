import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduleWrapperComponent } from './schedule.component';

import { ScheduleRoutingModule } from './schedule-routing.module';
import { MaterialModule } from 'src/app/material/material.module';
import { ScheduleModule } from '@syncfusion/ej2-angular-schedule';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { ContextMenuModule } from '@syncfusion/ej2-angular-navigations';
// import { DayService, WeekService, WorkWeekService, MonthService, AgendaService, MonthAgendaService} from '@syncfusion/ej2-angular-schedule';

@NgModule({
  declarations: [ScheduleWrapperComponent],
  imports: [
    CommonModule,
    ScheduleRoutingModule,
    MaterialModule,
    ScheduleModule,
    ButtonModule,
    ContextMenuModule
  ]
})
export class ScheduleWrapperModule { }
