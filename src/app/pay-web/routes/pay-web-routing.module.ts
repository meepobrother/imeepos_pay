import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogComponent } from './log/log.component';
import { TongjiComponent } from './tongji/tongji.component';
import { SettingComponent } from './setting/setting.component';
import { ApyRootComponent } from './apy-root/apy-root.component';
import { RefundlogComponent } from './refundlog/refundlog.component';

const routes: Routes = [{
  path: '',
  component: ApyRootComponent,
  children: [
    {
      path: 'log',
      component: LogComponent
    }, {
      path: 'refundlog',
      component: RefundlogComponent
    }, {
      path: 'index',
      component: TongjiComponent
    }, {
      path: 'tongji',
      component: TongjiComponent
    }, {
      path: 'setting',
      component: SettingComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PayWebRoutingModule { }
