import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { StockListComponent } from './stock-list/stock-list.component';

const routes: Routes = [
  { path:'', redirectTo:'/login', pathMatch:'full'},
  { path:'login',component:LoginComponent ,pathMatch:'full'},
  // { path:'login',component:LoginComponent ,pathMatch:'full', canActivate:[!authGuard]},
  { path:'register',component:RegisterComponent ,pathMatch:'full'},
  { path:'stocks',component:StockListComponent ,pathMatch:'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
