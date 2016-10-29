import { Injectable } from '@angular/core';

@Injectable()
export class TestUtilizedService {

  private test: string = "I AM used";

  getTest(): string {
    return this.test;
  }

}
