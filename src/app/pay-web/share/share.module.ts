import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgZorroAntdModule } from 'ng-zorro-antd';
import { NgZorroAntdExtraModule } from 'ng-zorro-antd-extra';
import { AlainABCModule } from '@delon/abc';
import { AlainThemeModule } from '@delon/theme';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgZorroAntdModule.forRoot(),
    NgZorroAntdExtraModule.forRoot(),
    AlainABCModule.forRoot(),
    AlainThemeModule.forRoot()
  ],
  declarations: [],
  exports: [
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
    NgZorroAntdExtraModule,
    AlainABCModule
  ]
})
export class ShareModule { }
