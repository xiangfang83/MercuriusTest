import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchScheduleComponent } from './watch-schedule.component';

describe('WatchScheduleComponent', () => {
  let component: WatchScheduleComponent;
  let fixture: ComponentFixture<WatchScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WatchScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
