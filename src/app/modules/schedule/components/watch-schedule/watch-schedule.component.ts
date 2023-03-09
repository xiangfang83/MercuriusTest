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

  constructor() { 
    this.viewMode = "Daily";
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

  radioButtonChange(data: MatRadioChange) {
    this.viewMode = data.value;
  }

}
