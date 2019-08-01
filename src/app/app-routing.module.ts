import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioComponent } from './investigador/investigador.component';

export const AppRoutes: Routes = [
  {
    path: 'usuario',
    component: UsuarioComponent    
  }]

@NgModule({
  imports: [RouterModule.forRoot(AppRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
