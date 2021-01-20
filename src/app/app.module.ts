import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { appRoutingProviders, routing } from "./app.routing";

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ModalComponent } from './components/modal/modal.component';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ModalComponent,
    MenuComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [ appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
