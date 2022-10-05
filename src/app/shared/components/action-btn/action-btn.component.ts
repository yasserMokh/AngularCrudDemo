import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-action-btn',
  templateUrl: './action-btn.component.html'
})
export class ActionBtnComponent implements OnInit {

  @Input()
  buttonText: string = 'Delete';
  @Input()
  confirmMessage: string = 'Are you share you want to Delete?'
  @Input()
  buttonClickedParams: any

  @Output() actionConfirm: EventEmitter<any> = new EventEmitter<any>();


  showConfirm: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onActionButtonClick():void{
    this.actionConfirm.emit(this.buttonClickedParams);
  }

}
