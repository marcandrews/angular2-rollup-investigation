import { Injectable } from '@angular/core';

@Injectable()
export class TestUnutilizedService {

  private test: string = "I am NOT used";

  getTest(): string {
    return this.test;
  }

}
