import { Component } from '@angular/core';

import { TestUtilizedService } from './test-utilized.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  isDarkTheme: boolean = false;

  foods: any[] = [
    {name: 'Pizza', rating: 'Excellent'},
    {name: 'Burritos', rating: 'Great'},
    {name: 'French fries', rating: 'Pretty good'},
  ];

  progress: number = 0;

  constructor(
    private testUtilizedService: TestUtilizedService
  ) {
    setInterval(() => {
      this.progress = (this.progress + Math.floor(Math.random() * 4) + 1) % 100;
    }, 200);
  }

  getTest(): string {
    return this.testUtilizedService.getTest();
  }

}
