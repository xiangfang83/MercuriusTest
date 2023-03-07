import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OtherDutiesComponent } from './other-duties.component';

const routes: Routes = [
  {
    path: '',
    component: OtherDutiesComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class OtherDutiesRoutingModule { }
