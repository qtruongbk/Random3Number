import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomNum1Service {

  constructor() { }
  getRandomNumber(){
    return Math.random();
  }
}
