import { Component } from '@angular/core';
import { InvestigadorService } from 'src/service/investigador/serviceInvestigador';
import { Investigador } from 'src/entidad/investigador/entidad.investigador';
import {Md5} from 'ts-md5/dist/md5';

@Component({
  selector: 'app-usuario',
  templateUrl: './investigador.component.html',
  styleUrls: ['./investigador.component.scss']
})
export class InvestigadorComponent {

  constructor(
    private investigadorService:InvestigadorService
    ){}

  user:string;
  pass:string;  

  onClickValidarUsuario(event)
  {
    
    let investiga = new Investigador();
    investiga.inv_user= this.user;
    investiga.inv_pass= this.pass;
    investiga.accion="login";
    let passEncrypt = new Md5().appendStr(this.pass);

    
     this.investigadorService.getValidar(investiga);
  }
}

