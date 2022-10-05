import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collapsible-card',
  templateUrl: './collapsible-card.component.html'
})
export class CollapsibleCardComponent implements OnInit {
  isCollapsed: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  toggleCollapse():void{
    this.isCollapsed = ! this.isCollapsed;    
  }

}
