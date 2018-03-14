import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PayMobileRoutingModule } from './pay-mobile-routing.module';
import { IndexComponent } from './index/index.component';
import { ChongzhiComponent } from './chongzhi/chongzhi.component';
import { TixianComponent } from './tixian/tixian.component';
import { LogComponent } from './log/log.component';
import { PayRootComponent } from './pay-root/pay-root.component';
import { LayoutModule } from '../layout/layout.module';
import { PayComponent } from './pay/pay.component';
import { PayResultComponent } from './pay-result/pay-result.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PopupModule } from 'ngx-weui/popup';
import { ActionSheetModule } from "ngx-weui/actionsheet";

@NgModule({
  imports: [
    CommonModule,
    PayMobileRoutingModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
    PopupModule.forRoot(),
    ActionSheetModule.forRoot()
  ],
  declarations: [IndexComponent, ChongzhiComponent, TixianComponent, LogComponent, PayRootComponent, PayComponent, PayResultComponent]
})
export class PayMobileModule { }
