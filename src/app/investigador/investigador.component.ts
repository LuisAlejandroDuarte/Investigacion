import { Component, ViewChild } from '@angular/core';
import { InvestigadorService } from 'src/service/investigador/serviceInvestigador';
import {Md5} from 'ts-md5/dist/md5';
import { Usuario } from 'src/entidad/usuario/entidad.usuario';
import { Mensaje, TipoMensaje } from 'src/entidad/mensaje/entidad.mensaje';
import { AlertaComponent } from '../alerta/alerta';
import { ErrorComponent } from '../error/error';
import { faCoffee,faUser,faCalendar } from '@fortawesome/free-solid-svg-icons';
import { TipoDocumento, Centro } from 'src/entidad/investigador/entidad.investigador';
declare const $: any;

@Component({
  selector: 'app-investigador',
  templateUrl: './investigador.component.html',
  styleUrls: ['./investigador.component.scss']
})

export class InvestigadorComponent {
  faUser = faUser;
  faCalendar =faCalendar;
  fechaNacimiento :{};
  listTipoDocumento : TipoDocumento[];
  listCentro:Centro[];
  constructor(private serviceInvestigador:InvestigadorService  
    ){}
  
    public ngOnInit() {
      
      this.fechaNacimiento = {
        "year": 2019,
        "month": 6,
        "day": 24
      }

      let tipo = new TipoDocumento();
      tipo.accion="listTipoDocumento";

      this.serviceInvestigador.getTipoDocumento(tipo).subscribe(result=>{
        this.listTipoDocumento = result;
        let centro = new Centro();
        centro.accion="listCentro";
        this.serviceInvestigador.getListCentro(centro).subscribe(centro=>{
          this.listCentro = centro;
        })

      })

      $('#iconoEspera').hide();
    }
}

