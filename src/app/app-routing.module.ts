import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvestigadorService } from 'src/service/investigador/serviceInvestigador';
import { UsuarioComponent } from './usuario/usuario.component';
import { InvestigadorComponent } from './investigador/investigador.component';
import { CentroService } from 'src/service/centro/serviceCentro';
import { ZonaService } from 'src/service/zona/serviceZona';

export const AppRoutes: Routes = [
  {
    path: 'usuario',
    component: UsuarioComponent    
  },
  {
    path: 'investigador',
    component: InvestigadorComponent 
  }]

@NgModule({  
  imports:[RouterModule.forRoot(AppRoutes)],
  exports: [RouterModule],
  providers:[InvestigadorService,CentroService,ZonaService]
})
export class AppRoutingModule { }
