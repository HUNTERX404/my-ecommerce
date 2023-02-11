import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, BrowserModule, RouterModule, HttpClientModule],
  exports: [HeaderComponent],
})
export class SharedModule {}
