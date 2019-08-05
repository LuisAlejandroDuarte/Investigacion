import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvestigadorComponent } from './investigador/investigador.component';
import { InvestigadorService } from 'src/service/investigador/serviceInvestigador';

export const AppRoutes: Routes = [
  {
    path: 'investigador',
    component: InvestigadorComponent    
  }]

@NgModule({
  imports: [RouterModule.forRoot(AppRoutes)],
  exports: [RouterModule],
  providers:[InvestigadorService]
})
export class AppRoutingModule { }
