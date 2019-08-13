import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvestigadorService } from 'src/service/serviceInvestigador';
import { UsuarioComponent } from './usuario/usuario.component';
import { InvestigadorComponent } from './investigador/investigador.component';
import { CentroService } from 'src/service/centro/serviceCentro';
import { ZonaService } from 'src/service/zona/serviceZona';
import { ProgramaService } from 'src/service/programa/servicePrograma';
import { EscuelaService } from 'src/service/escuela/serviceEscuela';

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
  imports:[RouterModule.forRoot(AppRoutes,{ useHash: true })],
  exports: [RouterModule],
  providers:[InvestigadorService,CentroService,
    ZonaService,ProgramaService,EscuelaService]
})
export class AppRoutingModule { }
