import { Component, ViewChild } from '@angular/core';
import { InvestigadorService } from 'src/service/investigador/serviceInvestigador';
import {Md5} from 'ts-md5/dist/md5';
import { Usuario } from 'src/entidad/usuario/entidad.usuario';
import { Mensaje, TipoMensaje } from 'src/entidad/mensaje/entidad.mensaje';
import { AlertaComponent } from '../alerta/alerta';
import { ErrorComponent } from '../error/error';
import { faCoffee,faUser } from '@fortawesome/free-solid-svg-icons';
declare const $: any;

@Component({
  selector: 'app-investigador',
  templateUrl: './investigador.component.html',
  styleUrls: ['./investigador.component.scss']
})

export class InvestigadorComponent {
  faUser = faUser;
  constructor(   
    ){}
  
    public ngOnInit() {
      $('#iconoEspera').hide();
    }
}

