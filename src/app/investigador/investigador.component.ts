import { Component, ViewChild } from '@angular/core';
import { InvestigadorService } from 'src/service/serviceInvestigador';
import {Md5} from 'ts-md5/dist/md5';
import { Usuario } from 'src/entidad/usuario/entidad.usuario';
import { Mensaje, TipoMensaje } from 'src/entidad/mensaje/entidad.mensaje';
import { AlertaComponent } from '../alerta/alerta';
import { ErrorComponent } from '../error/error';
import { faUser,faCalendar } from '@fortawesome/free-solid-svg-icons';
import { TipoDocumento, Investigador } from 'src/entidad/investigador/entidad.investigador';
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
import { ActivatedRoute } from '@angular/router';
import {  NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
declare const $: any;
import * as moment from 'moment';

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
  fechaNacimiento :NgbDateStruct;
  listTipoDocumento : TipoDocumento[];
  selTipoDocumento:number;
  listCentro:Centro[];
  listZona:Zona[];
  listPrograma:Programa[];
  listEscuela:Escuela[];
  listTipoCargo:TipoCargo[];
  investigador:Investigador;
  zona:Zona;
  nombreZona:string;
  programa :Programa;
  constructor(private serviceInvestigador:InvestigadorService,
    private serviceCentro:CentroService,
    private serviceZona:ZonaService,
    private servicePrograma:ProgramaService,
    private serviceEscuela:EscuelaService,
    private serviceTipoCargo:TipoCargoService,
    private activeRoute:ActivatedRoute
    ){}
  
    public ngOnInit() {
      this.investigador = new Investigador();
      this.investigador.INV_CODI =parseInt(this.activeRoute.snapshot.paramMap.get('id'));   

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
                this.mostrarInvestigador();
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
      centro.CEN_ZONA_CODI=event.target.value;
      centro.accion="listZonaByCentro";
      $('#iconoEspera').show();
      this.serviceZona.getZonaByCentro(centro).subscribe(result=>{
        this.listZona=result;
        this.nombreZona = result[0].ZON_NOMB;        
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

    mostrarInvestigador()
    {
      $('#iconoEspera').show();
        this.investigador.accion="GET";
        this.serviceInvestigador.getInvestigador(this.investigador).subscribe(res=>{
          if (res[0]!=null)
          {                                   
            this.investigador=res[0];                   
            this.fechaNacimiento = {
              "year": moment(res[0].INV_FECH_NACI).year(),
              "month":moment(res[0].INV_FECH_NACI).month()+1,
              "day": moment(res[0].INV_FECH_NACI).date()
            }
            let centro = new Centro();
            centro.CEN_ZONA_CODI=this.investigador.INV_CENT_CODI;
            centro.accion="listZonaByCentro";
            $('#iconoEspera').show();
            this.serviceZona.getZonaByCentro(centro).subscribe(result=>{
              this.listZona=result;
              this.nombreZona = result[0].ZON_NOMB;        
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
            
            
            $('#iconoEspera').hide();
          }
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



    onGuardar()
    {
      var sel = this.selTipoDocumento;
    }

}

