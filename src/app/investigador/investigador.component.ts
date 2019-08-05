import { Component, ViewChild } from '@angular/core';
import { InvestigadorService } from 'src/service/investigador/serviceInvestigador';
import {Md5} from 'ts-md5/dist/md5';
import { Usuario } from 'src/entidad/usuario/entidad.usuario';
import { Mensaje, TipoMensaje } from 'src/entidad/mensaje/entidad.mensaje';
import { AlertaComponent } from '../alerta/alerta';
import { ErrorComponent } from '../error/error';
declare const $: any;

@Component({
  selector: 'app-usuario',
  templateUrl: './investigador.component.html',
  styleUrls: ['./investigador.component.scss']
})

export class InvestigadorComponent {

  @ViewChild(AlertaComponent) alerta: AlertaComponent;

  constructor(
    private investigadorService:InvestigadorService
    ){}

  user:string;
  pass:string; 
  mensaje:Mensaje;

  onClickValidarUsuario(event)
  {
    
    let usuario = new Usuario();
    usuario.use_usua= this.user;    
    usuario.accion="login";
    let passEncrypt = new Md5().appendStr(this.pass).end();
    usuario.use_clav=passEncrypt.toString();
    $('#iconoEspera').show();
     this.investigadorService.getValidar(usuario).subscribe(result=>{
       let res = new Usuario();
       if (result[0]!=null)
       {
          res= result[0];
          $('#iconoEspera').hide();
       }
       else
        {
          let mensaje =new Mensaje();
          mensaje.tipo=TipoMensaje.Advertencia;
          this.mensaje = new Mensaje(mensaje);
          this.mensaje.tipo=TipoMensaje.Error;
          this.mensaje.titulo="Validando Investigador";
          this.mensaje.cuerpo="No existe el usuario ";
          this.mensaje.nVentana="IdError";         
          this.alerta.onChangedMyId("IdError");
          $('#iconoEspera').hide();
          setTimeout(()=>{
            $('#IdError').show();     
          });
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

  public ngOnInit() {
    $('#iconoEspera').hide();
  }

  onClicBoton1(event){  
    if (event.nVentana=="IdError")
            $('#IdError').hide();

  }

}

