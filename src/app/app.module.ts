import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './main/dashboard/dashboard.component';
import { ServerFormComponent } from './main/dashboard/shared/server-form/server-form.component';
import { ServerListComponent } from './main/dashboard/shared/server-list/server-list.component';
import { NavbarComponent } from './main/dashboard/shared/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { ServerComponent } from './main/dashboard/shared/server-list/server/server.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ServerFormComponent,
    ServerListComponent,
    NavbarComponent,
    ServerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
