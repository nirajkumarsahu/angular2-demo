import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  	<h1>Hello {{pagetitle}}</h1>
    <inner-app></inner-app>
  	`
})
export class AppComponent { 

	pagetitle:string = 'Angular'; }