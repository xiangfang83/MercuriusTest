import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  navLinks: Array<any> = [
    {label: 'Employee Name 1', clicked: true},
    {label: 'Employee Name 2', clicked: false},
    {label: 'Employee Name 3', clicked: false},
    {label: 'Employee Name 4', clicked: false},
    {label: 'Employee Name 5', clicked: false}
  ]

  navContentTile: String = this.navLinks[0].label

  updateStatus(index: number) {
    this.navLinks.forEach((nav, ind) => {
      if (index === ind) {
        nav.clicked = true; 
        this.navContentTile = nav.label;
      } else {
        nav.clicked = false
      }
    })
  }

}
