import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeaveComponent } from './leave.component';

import { LeaveRoutingModule } from './leave-routing.module';
import { MaterialModule } from 'src/app/material/material.module';

@NgModule({
  declarations: [LeaveComponent],
  imports: [
    CommonModule,
    LeaveRoutingModule,
    MaterialModule
  ]
})
export class LeaveModule { }
