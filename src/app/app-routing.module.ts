import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Plataforma1Component } from './plataforma1/plataforma1.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { PEvaComponent } from './plataforms/p-eva/p-eva.component';
import { PSigaComponent } from './plataforms/p-siga/p-siga.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'panel', component:DashboardComponent},
  {path:'panel/a', component:Plataforma1Component},
  {path:'panel/p-eva', component:PEvaComponent},
  {path:'panel/p-siga', component:PSigaComponent},
  {path:'users', component:UserListComponent},
  {path:'users/create', component:UserFormComponent},
  {path:'users/edit/:id', component:UserFormComponent}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
