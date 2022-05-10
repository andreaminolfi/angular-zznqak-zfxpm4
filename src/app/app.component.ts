import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent {
  today = new Date().getTime();

  calendarFilter(date: Date | null): boolean {
    const today = new Date().getTime();
    return date ? today > date.getTime() : false;
  }

  save(form: NgForm): void {
    console.log(form.value);
  }
}
