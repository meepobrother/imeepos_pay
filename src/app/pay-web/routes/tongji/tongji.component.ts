import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { yuan } from '@delon/abc';
import { HttpClient } from '@angular/common/http';
import { We7Service } from 'we7-core';
@Component({
  selector: 'app-tongji',
  templateUrl: './tongji.component.html',
  styleUrls: ['./tongji.component.css']
})
export class TongjiComponent implements OnInit {
  yuan = yuan;
  list: { total: string, module: string }[] = [];
  constructor(
    public http: HttpClient,
    public we7: We7Service
  ) { }

  ngOnInit() {
    let url = this.we7.getWebUrl('open', { open: 'total' });
    this.http.get(url).subscribe((res: any) => {
      let { data } = res;
      let items: any[] = data;
      this.list = items.sort((a, b): number => {
        return b.total - a.total;
      });
      console.log(this.list);
    });
  }

}
