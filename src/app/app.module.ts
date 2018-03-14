import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { AppComponent } from './app.component';
import { MeepoUrlSerializer } from 'we7-router';
import { RouterModule, UrlSerializer } from '@angular/router';
import { We7Service, StartupService } from 'we7-core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
export function AppStartupFactory(startup: StartupService) {
  return () => startup.load();
}

import { AlainThemeModule } from '@delon/theme';
import { AlainACLModule } from '@delon/acl';
import { AlainAuthModule } from '@delon/auth';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AlainThemeModule.forRoot(),
    AlainACLModule.forRoot(),
    AlainAuthModule.forRoot(),
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([{
      path: 'app/entry/site/imeepos_pay',
      loadChildren: 'app/pay-mobile/routes/pay-mobile.module#PayMobileModule'
    }, {
      path: 'web/site/entry/imeepos_pay',
      loadChildren: 'app/pay-web/routes/pay-web.module#PayWebModule'
    }])
  ],
  providers: [{
    provide: UrlSerializer,
    useClass: MeepoUrlSerializer
  },
    StartupService,
    We7Service,
  {
    provide: APP_INITIALIZER,
    useFactory: AppStartupFactory,
    multi: true,
    deps: [StartupService]
  }, {
    provide: APP_BASE_HREF,
    useValue: '/'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
