import { Component, OnInit } from '@angular/core';
import { Observable } from 'windowed-observable';



@Component({
  selector: 'cuotas-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  observable = new Observable('konoha');
  title = '@apps/cuotas';
  constructor() {
  }
  ngOnInit() {
    this.observable.subscribe((ninja) => {
      console.log("Observer Angular", ninja)
    })
  };
  handleClick() {
    this.observable.publish('Kamisama');
  };
}
