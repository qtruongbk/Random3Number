import { Component, OnInit, } from '@angular/core';;

import { RandomNum1Service } from '../services/random-num1.service';
import { RandomNum2Service } from '../services/random-num2.service';
import { RandomNum3Service } from '../services/random-num3.service';

@Component({
  selector: 'app-component-a',
  templateUrl: './component-a.component.html',
  styleUrls: ['./component-a.component.scss'],
})
export class ComponentAComponent implements OnInit {
  numberValue: any = { value1: 0, value2: 0, value3: 0 }
  valueFail: string = '';
  display:boolean = false;
  constructor(
    private RandomNum1Service: RandomNum1Service,
    private RandomNum2Service: RandomNum2Service,
    private RandomNum3Service: RandomNum3Service,
  ) { }

  ngOnInit() {
  }

  async getRandomNumberAsync(el: any) {

    let group: any = await {
      value1: this.RandomNum1Service.getRandomNumber().toFixed(3),
      value2: this.RandomNum2Service.getRandomNumber().toFixed(3),
      value3: this.RandomNum3Service.getRandomNumber().toFixed(3)
    };

    this.numberValue = await group;

    if (group.value1 < group.value2 || group.value2 < group.value3) {
      //Nháy ánh sáng đỏ nếu không đạt yêu cầu đầu bài #1>#2>#3
      el.classList.remove("animationFail")
      setTimeout(() => {
        el.classList.add("animationFail")
      }, 10);
      //Kiểm tra điều kiện chuỗi có chứa dấu xuống dòng ở cuối cùng
      if (!this.valueFail.endsWith("\n") && this.valueFail != "") {
        this.valueFail += "\n"
      }

      this.valueFail += `${group.value1}-${group.value2}-${group.value3}`;
    };
  }

  showDialog(){
    console.log(1)
    this.display = true;
  }
  mamau:string;
}
