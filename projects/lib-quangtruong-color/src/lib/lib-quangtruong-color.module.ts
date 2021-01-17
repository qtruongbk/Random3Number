import { NgModule } from '@angular/core';
import { LibQuangtruongColorComponent } from './lib-quangtruong-color.component';
import { LibQuangTruongColorDirective } from './lib-quang-truong-color.directive';


@NgModule({
  declarations: [LibQuangtruongColorComponent,LibQuangTruongColorDirective],
  imports: [
  ],
  exports: [LibQuangtruongColorComponent,LibQuangTruongColorDirective]
})
export class LibQuangtruongColorModule { }
