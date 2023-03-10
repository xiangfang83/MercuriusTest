import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { MatRadioChange } from '@angular/material/radio';
import weekly_data_json from 'src/assets/json/employee-schedule-weekly.json';
import daily_data_json from 'src/assets/json/employee-schedule-daily.json';

@Component({
  selector: 'app-watch-schedule',
  templateUrl: './watch-schedule.component.html',
  styleUrls: ['./watch-schedule.component.scss']
})
export class WatchScheduleComponent implements OnInit {

  viewMode: string;
  daily_data: object[] = daily_data_json;
  weekly_time_data: string[] = [];
  weekly_date_data: string[] = [];
  weekly_table_data: object[][] = [];
  immutable_weekly_data: object[];

  constructor() { 
    this.viewMode = "Daily";
    weekly_data_json.forEach((data) => {
      if (this.weekly_time_data.indexOf(data.time) === -1) {
        this.weekly_time_data.push(data.time)
      }
    });
    weekly_data_json.forEach((data) => {
      if (this.weekly_date_data.indexOf(data.date) === -1) {
        this.weekly_date_data.push(data.date)
      }
    });
    this.weekly_time_data.forEach((time) => {
      let tmpArr: object[] = [];
      this.weekly_date_data.forEach((date) => {
        let result = weekly_data_json.filter((data) => data.date === date && data.time === time);
        if (result.length > 0) tmpArr.push(result[0]);
        else tmpArr.push({
          bidscheduleid: 0,
          managerid: 0,
          areaid: "",
          date: date,
          time: time,
          year: "",
          duration: 0,
          empinfo: []
        });
      });
      this.weekly_table_data.push(tmpArr);
    });
    this.immutable_weekly_data = this.cloneDeepArray(weekly_data_json);
  }

  cloneDeepArray(obj: object[]) {
    return JSON.parse(JSON.stringify(obj));
  }

  ngOnInit() {
  }

  drop(event: CdkDragDrop<object[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

  getStatus(time: string) {
    if (time === '2300' || time === '2330') {
      return 1;
    }
    if (time === '0600' || time === '0700' || time === '0800') {
      return 0;
    }
    return 2;
  }

  isFilled(ind1: number, ind2: number, empinitials: string) {
    var status = true;
    this.immutable_weekly_data.forEach((data) => {
      if (data['time'] === this.weekly_time_data[ind1] && data['date'] === this.weekly_date_data[ind2]
        && data['empinfo'].slice().map((emp) => emp.empinitials).indexOf(empinitials) !== -1) {
        status = false;
      }
    });
    return status;
  }

  radioButtonChange(data: MatRadioChange) {
    this.viewMode = data.value;
  }

}
