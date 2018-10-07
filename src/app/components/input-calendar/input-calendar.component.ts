import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-calendar',
  templateUrl: './input-calendar.component.html',
  styleUrls: ['./input-calendar.component.css']
})
export class InputCalendarComponent implements OnInit {

  date: Date;
  date1: Date;
  date2: Date;

  cn: any;

  invalidDates: Array<Date>;

  ngOnInit() {
    this.cn = {
      firstDayOfWeek: 1,
      dayNames: ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
      dayNamesShort: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
      dayNamesMin: ['日', '一', '二', '三', '四', '五', '六'],
      monthNames: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
      monthNamesShort: ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'],
      today: '今天',
      clear: '清除'
    };


    const today = new Date();

    const invalidDate = new Date();
    invalidDate.setDate(today.getDate() - 1);
    this.invalidDates = [today, invalidDate];
  }

}
