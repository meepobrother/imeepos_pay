import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ChongzhiComponent } from './chongzhi/chongzhi.component';
import { TixianComponent } from './tixian/tixian.component';
import { LogComponent } from './log/log.component';
import { PayRootComponent } from './pay-root/pay-root.component';

import { PayComponent } from './pay/pay.component';
import { PayResultComponent } from './pay-result/pay-result.component';
const routes: Routes = [{
  path: '',
  component: PayRootComponent,
  children: [{
    path: 'index',
    component: IndexComponent
  }, {
    path: 'chongzhi',
    component: ChongzhiComponent
  }, {
    path: 'tixian',
    component: TixianComponent
  }, {
    path: 'log',
    component: LogComponent
  }, {
    path: 'pay',
    component: PayComponent
  }, {
    path: 'payresult',
    component: PayResultComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PayMobileRoutingModule { }
