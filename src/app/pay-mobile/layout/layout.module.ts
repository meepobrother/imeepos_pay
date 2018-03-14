import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { AppSidebarComponent } from './app-sidebar/app-sidebar.component';
import { AppDefaultComponent } from './app-default/app-default.component';
import { AppPageComponent } from './app-page/app-page.component';
import { AppContentComponent } from './app-content/app-content.component';
import { PayShareModule } from '../../pay-share/pay-share.module';
@NgModule({
  imports: [
    CommonModule,
    PayShareModule
  ],
  declarations: [AppHeaderComponent, AppFooterComponent, AppSidebarComponent, AppDefaultComponent, AppPageComponent, AppContentComponent],
  exports: [AppDefaultComponent]
})
export class LayoutModule { }

