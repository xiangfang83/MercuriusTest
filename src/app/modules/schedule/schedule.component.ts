import { Component, Inject, ViewChild, ViewEncapsulation, ElementRef, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EventSettingsModel , DayService, WeekService, WorkWeekService, MonthService, AgendaService, ScheduleComponent, CellClickEventArgs } from '@syncfusion/ej2-angular-schedule';
import { ContextMenuComponent, MenuItemModel, BeforeOpenCloseMenuEventArgs, MenuEventArgs } from '@syncfusion/ej2-angular-navigations';
import { FormBuilder, Validators } from '@angular/forms';

export interface DialogData {
  name: Array<string>;
  type: Array<string>;
  is_fmla: boolean;
  leave_purpose: Array<string>;
  fmla_purpose: Array<string>;
  start_date: string;
  end_date: string;
  start_time: string;
  end_time: string;
  remarks: string;
}

@Component({
  selector: 'app-schedule',
  providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService],
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss'],
  encapsulation: ViewEncapsulation.None
})
  
export class ScheduleWrapperComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

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
              this.openDialog();
              break;
          case 'OtherRequests':
              break;
      }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAnnualLeaveRequest, {
      width: '700px',
      data: {
        name: ["Alex Miller", "Employee 1", "Employee 2"],
        type: ["Annual Leave"],
        is_fmla: false,
        leave_purpose: ["Illness/Injury/Incapacitation Of Requesting Employee"],
        fmla_purpose: ["Birth/Adoption/Foster Care"],
        start_date: "02/25/1997",
        end_date: "03/07/2023",
        start_time: "08:00",
        end_time: "10:00",
        remarks: "This is test remark!!!"
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
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

@Component({
  selector: 'dialog-annual-leave-request',
  templateUrl: './components/dialog-annual-leave-request.component.html',
})
export class DialogAnnualLeaveRequest {

  annualLeaveRequestForm = this.fb.group({
    name: [null, Validators.required],
    type: [null, Validators.required],
    is_fmla: false,
    leave_purpose: [null, Validators.required],
    fmla_purpose: [null, Validators.required],
    start_date: [null, Validators.required],
    end_date: [null, Validators.required],
    start_time: [null, Validators.required],
    end_time: [null, Validators.required],
    remarks: null
  });

  constructor(
    public dialogRef: MatDialogRef<DialogAnnualLeaveRequest>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private fb: FormBuilder) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onTimeClick(e: Event): void {
    e.preventDefault();
  }

  onSubmit(): void {
    this.dialogRef.close();
  }

}