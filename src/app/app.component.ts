import { Component } from '@angular/core';
// import { Observable, Subscriber } from 'rxjs';
import { Observable } from 'rxjs/Observable';
import { Subscriber } from 'rxjs/Subscriber';

import { TestUtilizedService } from './test-utilized.service';

@Component({
  selector: 'my-app',
  template: `
	  <b>Angular 2 Component using Observables!</b>

	  <h5 style="margin-bottom: 0">VALUES</h5>
	  <div>{{ values.toString() }}</div>

	  <h5 style="margin-bottom: 0">ERRORS</h5>
	  <pre><code>{{anyErrors}}</code></pre>

	  <button style="margin-top: 2rem;" (click)="init()">Init</button>
  `
})

export class AppComponent {

  finished = false;

	values: Array<number> = [];
	anyErrors: any;

  private data: Observable<Array<number>>;

	init() {

    this.data = new Observable<Array<number>>((observer: Subscriber<number>) => {
        setTimeout(() => {
            observer.next(42);
        }, 1000);

        setTimeout(() => {
            observer.next(43);
        }, 2000);

        setTimeout(() => {
            observer.complete();
        }, 3000);
    });

    let subscription = this.data.subscribe(
      value => { console.log(value); },
      error => this.anyErrors = true,
      () => this.finished = true
    );
	}

}
