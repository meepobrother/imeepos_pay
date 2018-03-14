import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebHeaderComponent } from './web-header/web-header.component';
import { WebFooterComponent } from './web-footer/web-footer.component';
import { WebSidebarComponent } from './web-sidebar/web-sidebar.component';
import { WebPageComponent } from './web-page/web-page.component';
import { WebContentComponent } from './web-content/web-content.component';
import { PayShareModule } from '../../pay-share/pay-share.module';
import { WebDefaultComponent } from './web-default/web-default.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
@NgModule({
  imports: [
    CommonModule,
    PayShareModule,
    TabsModule.forRoot()
  ],
  declarations: [WebHeaderComponent, WebFooterComponent, WebSidebarComponent, WebPageComponent, WebContentComponent, WebDefaultComponent],
  exports: [WebDefaultComponent]
})
export class LayoutModule { }
