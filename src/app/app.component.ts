import { Component } from '@angular/core';

import { TestUtilizedService } from './test-utilized.service';

@Component({
  selector: 'my-app',
  template: '<h1>My First Angular App</h1><p>{{ testUtilizedService.getTest() }}</p>'
})

export class AppComponent {

  testUtilizedService: any;

  constructor(
    // constructing private properties breaks AoT
    testUtilizedService: TestUtilizedService
  ) {}

}
