import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomNum3Service {

  constructor() { }
  getRandomNumber(){
    return Math.random();
  }
}
