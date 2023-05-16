import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AgGridModule } from 'ag-grid-angular';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu'
import { PanelMenuModule } from 'primeng/panelmenu';
import { PanelModule } from 'primeng/panel';
import { ToastModule } from 'primeng/toast';
import { SidebarModule } from 'primeng/sidebar';
import { HeaderComponent } from './header/header.component';
import { GridComponent } from './grid/grid.component';
import { MenubarModule } from 'primeng/menubar'


@NgModule({
 declarations: [
AppComponent,
HeaderComponent,
GridComponent,
],

imports: [
  BrowserModule,
  HttpClientModule,
  AgGridModule,
  ButtonModule,
  MenuModule,
  PanelMenuModule,
  ToastModule,
  PanelModule,
  SidebarModule,
  MenubarModule
],
providers: [],
bootstrap: [AppComponent]
})
export class AppModule { }