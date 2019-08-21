import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertaComponent } from '../alerta/alerta';
import { InvestigadorService } from 'src/service/serviceInvestigador';
import { Mensaje, TipoMensaje } from 'src/entidad/mensaje/entidad.mensaje';
import { Usuario } from 'src/entidad/usuario/entidad.usuario';
import { Md5 } from 'ts-md5';
import { ErrorComponent } from '../error/error';
import { Router } from '@angular/router';
declare const $: any
@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {

  @ViewChild(AlertaComponent,null) alerta: AlertaComponent;

  constructor(
    private investigadorService:InvestigadorService, 
    private router: Router
    ){}

  user:string;
  pass:string; 
  mensaje:Mensaje;

  onClickValidarUsuario(event)
  {
    let usuario = new Usuario;
    if (this.user!=undefined && this.pass!=undefined)
    {    
        usuario.use_usua= this.user;    
        usuario.accion="login";
        let passEncrypt = new Md5().appendStr(this.pass).end();
        usuario.use_clav=passEncrypt.toString();
        $('#iconoEspera').show();
        this.investigadorService.getValidar(usuario).subscribe(result=>{
          let res = new Usuario();
          if (result[0]!=null)
          {
              $('#iconoEspera').hide();
              this.router.navigate(["/investigador/" + result[0].inv_codi ]);  
          }
          else
            {
              let mensaje =new Mensaje();
              mensaje.tipo=TipoMensaje.Advertencia;
              this.mensaje = new Mensaje(mensaje);
              this.mensaje.tipo=TipoMensaje.Error;
              this.mensaje.titulo="Validando Investigador";
              this.mensaje.cuerpo="Puede ser que el usuario no este creado como investigador o el usuario y clave no corresponden";
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
    else
    {
      let mensaje =new Mensaje();
      mensaje.tipo=TipoMensaje.Advertencia;
      this.mensaje = new Mensaje(mensaje);
      this.mensaje.tipo=TipoMensaje.Informacion;
      this.mensaje.titulo="Validando Investigador";
      this.mensaje.cuerpo="Faltan Datos en usuario o clave";
      this.mensaje.nVentana="IdError";         
      this.alerta.onChangedMyId("IdError");
      $('#iconoEspera').hide();
      setTimeout(()=>{
        $('#IdError').show();     
      });
    }
  }

  public ngOnInit() {
    $('#iconoEspera').hide();
  }

  onClicBoton1(event){  
    if (event.nVentana=="IdError")
            $('#IdError').hide();

  }

}
