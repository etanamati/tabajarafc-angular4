import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginModule } from './login/login.module';
import { AppComponent } from './app.component';
import {AuthGuard} from './guards/auth.guard'

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', loadChildren: './login/login.module#LoginModule' },
  { path: 'jogador', loadChildren: './modules/jogador/jogador.module#JogadorModule', canActivate: [AuthGuard]},
  { path: 'clube', loadChildren: './modules/clube/clube.module#ClubeModule', canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), LoginModule],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
