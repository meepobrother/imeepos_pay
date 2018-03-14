import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PayWebRoutingModule } from './pay-web-routing.module';
import { LogComponent } from './log/log.component';
import { TongjiComponent } from './tongji/tongji.component';
import { SettingComponent } from './setting/setting.component';
import { ApyRootComponent } from './apy-root/apy-root.component';
import { LayoutModule } from '../layout/layout.module';
import { ShareModule } from '../share/share.module';
import { RefundlogComponent } from './refundlog/refundlog.component';

@NgModule({
  imports: [
    CommonModule,
    PayWebRoutingModule,
    LayoutModule,
    ShareModule
  ],
  declarations: [LogComponent, TongjiComponent, SettingComponent, ApyRootComponent, RefundlogComponent]
})
export class PayWebModule { }
