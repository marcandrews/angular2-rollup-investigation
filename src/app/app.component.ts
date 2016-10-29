import { Component } from '@angular/core';

import { TestUtilizedService } from './test-utilized.service';

@Component({
  selector: 'my-app',
  template: '<h1>My First Angular App</h1><p>{{ testUtilizedService.getTest() }}</p>'
})

export class AppComponent {

  constructor(
    private testUtilizedService: TestUtilizedService
  ) {}

}