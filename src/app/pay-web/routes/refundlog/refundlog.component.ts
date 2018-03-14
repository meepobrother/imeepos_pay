import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { We7Service } from 'we7-core';
import { SimpleTableColumn, SimpleTableChange, SimpleTableFilter } from '@delon/abc';
@Component({
  selector: 'app-refundlog',
  templateUrl: './refundlog.component.html',
  styleUrls: ['./refundlog.component.css']
})
export class RefundlogComponent implements OnInit {
  list: any[] = [];
  columns: SimpleTableColumn[] = [
    { title: '编号', index: 'id', type: 'checkbox' },
    { title: '退单号', index: 'refund_uniontid' },
    { title: '原因', index: 'reason' },
    { title: '状态', index: 'status' },
    { title: '退款金额', index: 'fee', type: 'currency' },
  ];
  constructor(
    public we7: We7Service,
    public http: HttpClient
  ) { }

  ngOnInit() {
    let url = this.we7.getWebUrl('open', { open: 'refundlog' });
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
