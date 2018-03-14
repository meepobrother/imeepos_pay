import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { We7Service } from 'we7-core';
import { SimpleTableColumn, SimpleTableChange, SimpleTableFilter } from '@delon/abc';
@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {
  list: any[] = [];
  columns: SimpleTableColumn[] = [
    { title: '编号', index: 'plid', type: 'checkbox' },
    { title: '类型', index: 'type' },
    { title: '订单号', index: 'tid' },
    { title: '模块', index: 'module' },
    { title: '状态', index: 'status' },
    { title: '金额', index: 'fee', type: 'currency' },
  ];
  constructor(
    public we7: We7Service,
    public http: HttpClient
  ) { }

  ngOnInit() {
    let url = this.we7.getWebUrl('open', { open: 'paylog' });
    this.http.get(url).subscribe((res: any) => {
      this.list = res.data;
      console.log(this.list);
    });
  }
  selected: any[] = [];
  checkboxChange(e) {
    this.selected = e;
  }

}
