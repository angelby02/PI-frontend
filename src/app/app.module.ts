import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Plataforma1Component } from './plataforma1/plataforma1.component'
import { FilterPipe } from 'src/pipes/filter.pipe';
import { AuthenticationService } from 'src/services/authentication.service';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { PEvaComponent } from './plataforms/p-eva/p-eva.component';
import { PSigaComponent } from './plataforms/p-siga/p-siga.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    HomeComponent,
    DashboardComponent,
    Plataforma1Component,
    FilterPipe,
    UserFormComponent,
    UserListComponent,
    NavBarComponent,
    PEvaComponent,
    PSigaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }

