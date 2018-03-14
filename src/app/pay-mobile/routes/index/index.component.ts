import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { We7Service } from 'we7-core';
import { ActionSheetService, ActionSheetConfig, ActionSheetComponent } from "ngx-weui/actionsheet";
import { SkinType } from 'ngx-weui';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  money: number = 0;
  tid: string;
  constructor(
    public we7: We7Service,
    public http: HttpClient,
    public srv: ActionSheetService
  ) { }

  ngOnInit() {
    this.tid = this.guid();
  }
  payments: any[] = [];
  pay() {
    let url = this.we7.getMobileUrl('open', { open: 'paymethod' });
    this.http.post(url, { fee: this.money, tid: this.tid, module: 'imeepos_pay' }).subscribe((res: any) => {
      let { data, errno, message } = res;
      let { credtis, params, pay } = data;
      let payments: any[] = [];
      if (errno === 0) {
        for (let key in pay) {
          if (pay[key].switch) {
            payments.push({
              value: key,
              text: this.getTitle(key),
              pay: pay[key],
              params: params
            });
          }
        }
        this.payments = payments;
        this.srv.show(this.payments, { skin: 'ios', backdrop: true, title: '选择支付方式' }).subscribe(res => {
          this.postOrder(res);
        });
      }
    });;
  }

  postOrder(res: any) {
    const { text, params, value, pay } = res;
    let url = this.we7.getMobileUrl('pay', { m: 'imeepos_pay' });
    this.http.post(url, {
      module: 'imeepos_pay',
      method: value,
      tid: params.tid,
      fee: params.fee,
    }).subscribe((res: any) => {
      console.log(res);
      let { data, errno, message } = res;
      if('2' == errno){
        location.href = message.length >0 ? message: data;
      }else{
        console.log(res);
      }
    });
  }

  getTitle(key: string) {
    let types = {
      alipay: '支付宝',
      baifubao: '百付宝',
      card: '卡券支付',
      credit: '余额支付',
      delivery: '到付',
      line: '在线支付',
      unionpay: '银联支付',
      wechat: '微信支付'
    };
    return types[key];
  }

  guid() {
    return 'MTxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

}
