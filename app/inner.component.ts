import { Component , Input } from '@angular/core';

@Component({
  selector: 'inner-app',
  template: `
{{ masterName  }}
  <h2> Inner Component </h2>`
})
export class InnerComponent { 

@Input('pagetitle') masterName: string;
}