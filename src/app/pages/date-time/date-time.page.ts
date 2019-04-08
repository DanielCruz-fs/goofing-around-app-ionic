import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {
  dateOfBirth: Date = new Date();
  customPickerOptions;
  customDate;
  
  constructor() { }

  ngOnInit() {
    this.customPickerOptions = {
      buttons: [{
        text: 'Save Date',
        handler: (event) => {
          console.log(event);
          console.log('Clicked Save!');  
        }
      }, {
        text: 'Log',
        handler: () => {
          console.log('Clicked Log. Do not Dismiss.');
          return false;
        }
      }]
    }
  }

  changeDate(event): void {
    console.log(new Date(event.detail.value));
  }

}
