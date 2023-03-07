import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/schedule/schedule.module')
      .then(m => m.ScheduleWrapperModule)
  },
  {
    path: 'leave',
    loadChildren: () => import('./modules/leave/leave.module')
      .then(m => m.LeaveModule)
  },
  {
    path: 'overtime',
    loadChildren: () => import('./modules/overtime/overtime.module')
      .then(m => m.OvertimeModule)
  },
  {
    path: 'other-duties',
    loadChildren: () => import('./modules/other-duties/other-duties.module')
      .then(m => m.OtherDutiesModule)
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
