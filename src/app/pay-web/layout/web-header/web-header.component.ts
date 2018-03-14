import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'web-header',
  templateUrl: './web-header.component.html',
  styleUrls: ['./web-header.component.scss']
})
export class WebHeaderComponent implements OnInit {
  list: any[] = [{
    title: '公众号',
  }, {
    title: '小程序'
  }, {
    title: 'PC'
  }, {
    title: '应用'
  }, {
    title: '系统'
  }, {
    title: '站点'
  }, {
    title: '广告联盟'
  }, {
    title: '市场'
  }, {
    title: '系统帮助'
  }];
  constructor() { }

  ngOnInit() {
  }

}
