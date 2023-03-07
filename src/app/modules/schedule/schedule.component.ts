import { Component, ViewChild, ViewEncapsulation, ElementRef, OnInit } from '@angular/core';
import { closest, isNullOrUndefined, remove, removeClass } from '@syncfusion/ej2-base';
import { DataManager, Query } from '@syncfusion/ej2-data';
import { EventSettingsModel , DayService, WeekService, WorkWeekService, MonthService, AgendaService, ScheduleComponent, CellClickEventArgs } from '@syncfusion/ej2-angular-schedule';
import { ContextMenuComponent, MenuItemModel, BeforeOpenCloseMenuEventArgs, MenuEventArgs } from '@syncfusion/ej2-angular-navigations';
@Component({
  selector: 'app-schedule',
  providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService],
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss'],
  encapsulation: ViewEncapsulation.None
})
  
export class ScheduleWrapperComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  @ViewChild('scheduleObj', {read: ElementRef, static: true})
  public scheduleObj: ScheduleComponent;
  @ViewChild('menuObj', {read: ElementRef, static: true})
  public menuObj: ContextMenuComponent;
  public selectedTarget: Element;

  public data: object[] = [{
      Id: 2,
      Subject: 'Paris',
      StartTime: new Date(2023, 3, 7, 10, 0),
      EndTime: new Date(2023, 3, 7, 12, 30)
  }];
  public selectedDate: Date = new Date(2023, 3, 7);
  public eventSettings: EventSettingsModel = {
      dataSource: this.data
  };

  navLinks: Array<any> = [
    {label: 'Employee Name 1', clicked: true},
    {label: 'Employee Name 2', clicked: false},
    {label: 'Employee Name 3', clicked: false},
    {label: 'Employee Name 4', clicked: false},
    {label: 'Employee Name 5', clicked: false}
  ]

  navContentTile: String = this.navLinks[0].label

  public menuItems: MenuItemModel[] = [
      {
          text: 'Submit Annual Leave Request',
          id: 'AnnualLeaveRequest'
      }, {
          text: 'Submit Other Requests',
          id: 'OtherRequests'
      }
  ];

  onContextMenuBeforeOpen(args: BeforeOpenCloseMenuEventArgs): void {
  }

  onMenuItemSelect(args: MenuEventArgs): void {
      const selectedMenuItem: string = args.item.id;
      let eventObj: { [key: string]: Object };
      if (this.selectedTarget && this.selectedTarget.classList.contains('e-appointment')) {
          eventObj = <{ [key: string]: Object }>this.scheduleObj.getEventDetails(this.selectedTarget);
      }
      switch (selectedMenuItem) {
          case 'AnnualLeaveRequest':
              
              break;
          case 'OtherRequests':
              
              break;
      }
  }

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
