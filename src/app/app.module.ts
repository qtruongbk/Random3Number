import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentAComponent } from './component-a/component-a.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogModule } from 'primeng/dialog';

import {RandomNum1Service} from './services/random-num1.service';
import {RandomNum2Service} from './services/random-num2.service';
import {RandomNum3Service} from './services/random-num3.service';

import { LibQuangtruongColorModule } from 'libQuangtruongColor';
@NgModule({
  declarations: [
    AppComponent,
    ComponentAComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    DialogModule,
    LibQuangtruongColorModule
  ],
  providers: [
    RandomNum1Service,
    RandomNum2Service,
    RandomNum3Service,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
