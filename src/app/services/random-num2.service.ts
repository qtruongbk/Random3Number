import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomNum2Service {

  constructor() { }
  getRandomNumber(){
    return Math.random();
  }
}
