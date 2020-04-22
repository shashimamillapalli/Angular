import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  template: '<h2>{{"Hello "+name}}</h2> <button (click)="fireEvent()">send Event</button> ',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  @Input('parentData') public name;

  @Output() public childEvent = new EventEmitter();



  constructor() { }

  ngOnInit(): void {
  }
  fireEvent(){
    this.childEvent.emit("hey child event is emitted");
  }

}
