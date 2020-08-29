import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisteruserComponent } from './registeruser/registeruser.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'registeruser', component: RegisteruserComponent},
  { path: 'register', component:RegisterComponent},
  { path: 'dashboard', component:DashboardComponent},
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'}
];

// const routes: Routes = []

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
