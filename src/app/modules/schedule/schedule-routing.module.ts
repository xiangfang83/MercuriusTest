import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScheduleWrapperComponent } from './schedule.component';
import { WatchScheduleComponent } from './components/watch-schedule/watch-schedule.component';

const routes: Routes = [
  {
    path: '',
    component: ScheduleWrapperComponent
  },
  {
    path: 'watch-schedule',
    component: WatchScheduleComponent
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
