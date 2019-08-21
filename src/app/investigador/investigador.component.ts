import { Component, ViewChild } from '@angular/core';
import { InvestigadorService } from 'src/service/serviceInvestigador';
import {Md5} from 'ts-md5/dist/md5';
import { Usuario } from 'src/entidad/usuario/entidad.usuario';
import { Mensaje, TipoMensaje } from 'src/entidad/mensaje/entidad.mensaje';
import { AlertaComponent } from '../alerta/alerta';
import { ErrorComponent } from '../error/error';
import { faUser,faCalendar } from '@fortawesome/free-solid-svg-icons';
import { TipoDocumento } from 'src/entidad/investigador/entidad.investigador';
import { CentroService } from 'src/service/centro/serviceCentro';
import { Centro } from 'src/entidad/centro/entidad.centro';
import { ZonaService } from 'src/service/zona/serviceZona';
import { Zona } from 'src/entidad/zona/entidad.zona';
import { Programa } from 'src/entidad/programa/entidad.programa';
import { ProgramaService } from 'src/service/programa/servicePrograma';
import { Escuela } from 'src/entidad/escuela/entidad.escuela';
import { EscuelaService } from 'src/service/escuela/serviceEscuela';
import { TipoCargo } from 'src/entidad/tipoCargo/entidad.tipoCargo';
import { TipoCargoService } from 'src/service/tipoCargo/service.tipoCargo';
declare const $: any;

@Component({
  selector: 'app-investigador',
  templateUrl: './investigador.component.html',
  styleUrls: ['./investigador.component.scss']
})

export class InvestigadorComponent {

  @ViewChild(AlertaComponent,null) alerta: AlertaComponent;

  mensaje:Mensaje;
  faUser = faUser;
  faCalendar =faCalendar;
  fechaNacimiento :{};
  listTipoDocumento : TipoDocumento[];
  selTipoDocumento:TipoDocumento;
  listCentro:Centro[];
  listZona:Zona[];
  listPrograma:Programa[];
  listEscuela:Escuela[];
  listTipoCargo:TipoCargo[];
  constructor(private serviceInvestigador:InvestigadorService,
    private serviceCentro:CentroService,
    private serviceZona:ZonaService,
    private servicePrograma:ProgramaService,
    private serviceEscuela:EscuelaService,
    private serviceTipoCargo:TipoCargoService 
    ){}
  
    public ngOnInit() {
      
      this.fechaNacimiento = {
        "year": 2019,
        "month": 6,
        "day": 24
      }

      let tipo  =  new TipoDocumento();
      tipo.accion="listTipoDocumento";
      $('#iconoEspera').show();
      this.serviceInvestigador.getTipoDocumento(tipo).subscribe(result=>{
        this.listTipoDocumento = result;
        let centro = new Centro();
        centro.accion="listCentro";
        this.serviceCentro.getListCentro(centro).subscribe(centro=>{
          this.listCentro = centro;

          let programa = new Programa();
          programa.accion="listPrograma";
          this.servicePrograma.getListPrograma(programa).subscribe(progra=>{
            this.listPrograma=progra;

            let tipoCargo= new TipoCargo();
              tipoCargo.accion="listTipoCargo";
              this.serviceTipoCargo.getListTipoCargo(tipoCargo).subscribe(res=>{
                this.listTipoCargo=res;
                $('#iconoEspera').hide();
              },error=> {
                $('#iconoEspera').hide();
                console.clear();
                var errorComponent = new ErrorComponent();            
                this.mensaje =errorComponent.GenerarMensaje(error);          
                this.mensaje.nVentana="IdError";
                this.alerta.onChangedMyId("IdError");                      
                $('#IdError').show();
              });              
          },error=> {
            $('#iconoEspera').hide();
            console.clear();
            var errorComponent = new ErrorComponent();            
            this.mensaje =errorComponent.GenerarMensaje(error);          
            this.mensaje.nVentana="IdError";
            this.alerta.onChangedMyId("IdError");                      
            $('#IdError').show();
          });
          
        },error=> {
          $('#iconoEspera').hide();
          console.clear();
          var errorComponent = new ErrorComponent();            
          this.mensaje =errorComponent.GenerarMensaje(error);          
          this.mensaje.nVentana="IdError";
          this.alerta.onChangedMyId("IdError");                      
          $('#IdError').show();  
    })

      },error=> {
        $('#iconoEspera').hide();
        console.clear();
        var errorComponent = new ErrorComponent();            
        this.mensaje =errorComponent.GenerarMensaje(error);          
        this.mensaje.nVentana="IdError";
        this.alerta.onChangedMyId("IdError");                      
        $('#IdError').show();  
      })
    }
    
    onChangeCentro(event)
    {
      let centro = new Centro();
      centro.cen_zona_codi=event.target.value;
      centro.accion="listZonaByCentro";
      $('#iconoEspera').show();
      this.serviceZona.getZonaByCentro(centro).subscribe(result=>{
        this.listZona=result;
        $('#iconoEspera').hide();
      },error=> {
        $('#iconoEspera').hide();
        console.clear();
        var errorComponent = new ErrorComponent();            
        this.mensaje =errorComponent.GenerarMensaje(error);          
        this.mensaje.nVentana="IdError";
        this.alerta.onChangedMyId("IdError");                      
        $('#IdError').show();  
        });      
    }

    onChangePrograma(event)
    {
      let programa =new  Programa();
      programa.pac_escu_codi =event.target.value;
      programa.accion="listEscuelaByPrograma";
      $('#iconoEspera').show();
      this.serviceEscuela.getListEscuelaByPrograma(programa).subscribe(result=>{
        this.listEscuela =result;
        $('#iconoEspera').hide();
      },error=> {
        $('#iconoEspera').hide();
        console.clear();
        var errorComponent = new ErrorComponent();            
        this.mensaje =errorComponent.GenerarMensaje(error);          
        this.mensaje.nVentana="IdError";
        this.alerta.onChangedMyId("IdError");                      
        $('#IdError').show();  
        });      
    }

    onClicBoton1(event){  
      if (event.nVentana=="IdError")
              $('#IdError').hide();
  
    }

    onGuardar()
    {
      var sel = this.selTipoDocumento;
    }

}

