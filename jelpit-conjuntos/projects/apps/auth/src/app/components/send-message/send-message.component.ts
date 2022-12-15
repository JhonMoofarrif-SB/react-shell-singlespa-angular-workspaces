import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['../../app.component.scss']
})
export class SendMessageComponent implements OnInit {
  @Output() showEvent = new EventEmitter<boolean>()

  onResendEvent(){
    this.showEvent.emit(false)
  }

  constructor(
  ) {}
  
  ngOnInit(): void {}
}
