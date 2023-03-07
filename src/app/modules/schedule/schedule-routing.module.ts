import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScheduleWrapperComponent } from './schedule.component';

const routes: Routes = [
  {
    path: '',
    component: ScheduleWrapperComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ScheduleRoutingModule { }
