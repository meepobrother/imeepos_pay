import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { We7Service } from 'we7-core';
@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {
  form: FormGroup;
  constructor(
    public fb: FormBuilder,
    public http: HttpClient,
    public we7: We7Service
  ) {
    this.form = this.fb.group({
      recharge: 0,
      tixian: 0,
      url: 'http://meepo.com.cn/'
    });
  }

  ngOnInit() {
    this.get();
  }

  get() {
    let url = this.we7.getWebUrl('open', { open: 'getsetting' });
    this.http.get(url).subscribe((res: any) => {
      let { data } = res;
      this.form.get('recharge').setValue(data.recharge);
      this.form.get('tixian').setValue(data.tixian);
      this.form.get('url').setValue(data.url || '');
      this.form.valueChanges.subscribe(res => {
        this.save(res);
      });
    });
  }

  save(res: any) {
    let url = this.we7.getWebUrl('open', { open: 'savesetting' });
    this.http.post(url, res).subscribe(res => {
      console.log(res);
    });
  }

}
