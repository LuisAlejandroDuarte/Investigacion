import { Component } from '@angular/core';
import { InvestigadorService } from 'src/service/investigador/serviceInvestigador';
import { Investigador } from 'src/entidad/investigador/entidad.investigador';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent {
  title = 'USUARIOS';
  inv_user:string;
  inv_pass:string;

  
  constructor(
    private investigadorService:InvestigadorService
){}
  onClickValidarUsuario()
  {
    let investiga = new Investigador();
    investiga.inv_user= this.inv_user;
    investiga.inv_pass= this.inv_pass;

     this.investigadorService.getValidar(investiga);
  }
}

