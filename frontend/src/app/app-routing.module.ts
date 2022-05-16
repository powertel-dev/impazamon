import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { ForgotPasswordComponent } from './loginComponents/forgot-password/forgot-password.component';
import { LoginComponent } from './loginComponents/login/login.component';
import { NotFoundComponent } from './loginComponents/not-found/not-found.component';

const routes: Routes = [
  {path:'login', component: LoginComponent },
  {path:'forgot-password', component: ForgotPasswordComponent},
  {path:'', redirectTo:'/login', pathMatch:'full'},
  {path: 'user',
  canActivate: [AuthGuard],
    loadChildren:() => 
      import('./modules/modules.module').then((m) =>m.ModulesModule)},
  {path:'**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
