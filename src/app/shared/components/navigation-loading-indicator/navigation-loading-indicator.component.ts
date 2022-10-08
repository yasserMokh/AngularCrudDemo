import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError, NavigationCancel } from '@angular/router';

@Component({
  selector: 'app-navigation-loading-indicator',
  templateUrl: './navigation-loading-indicator.component.html'
})
export class NavigationLoadingIndicatorComponent implements OnInit {

  showLoadingIndicator: boolean = true;

  constructor(private _router: Router) {

    this._router.events.subscribe((routerEvent: Event) => {

      if (routerEvent instanceof (NavigationStart)) {
        this.showLoadingIndicator = true;
        return;
      };

      if(routerEvent instanceof (NavigationError)){
        this.showLoadingIndicator = false;
        console.log('error');
        _router.navigate(['/error']);
      }

      if (routerEvent instanceof (NavigationEnd) ||
         
        routerEvent instanceof (NavigationCancel)) {
        this.showLoadingIndicator = false;
      }

    });
    
  }

  ngOnInit(): void {
  }

}
