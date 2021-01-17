import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-libQuangtruongColor',
  template: `
    <p>
      lib-quangtruong-color works!
    </p>
    <input libQuangTruongColor="red">
  `,
  styles: []
})
export class LibQuangtruongColorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
