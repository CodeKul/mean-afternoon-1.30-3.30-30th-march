import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login/login.component';

const routes: Routes = [
  // { path: 'login', component: LoginComponent }
  { path: 'login', loadChildren: './login/login.module#LoginModule' },
  { path: 'chat', loadChildren: './chat/chat.module#ChatModule' },
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
