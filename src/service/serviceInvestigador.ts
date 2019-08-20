import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpInterceptor} from '@angular/common/http';
import { Investigador, TipoDocumento } from 'src/entidad/investigador/entidad.investigador';
import { Observable } from 'rxjs';
import { Usuario } from 'src/entidad/usuario/entidad.usuario';


const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json charset=utf-8','Accept': 'application/json'})
  };

@Injectable()
export class InvestigadorService implements HttpInterceptor {
  intercept(req: import("@angular/common/http").HttpRequest<any>, next: import("@angular/common/http").HttpHandler): Observable<import("@angular/common/http").HttpEvent<any>> {

      var url = req.url;

    throw new Error("Method not implemented.");
   

  }
 

    constructor(
        public http: HttpClient
    ){}

    getValidar(usuario:Usuario) : Observable<Usuario>{
                   
      const headers = new HttpHeaders().set('content-type', 'application/json');  
      return this.http.post<Usuario>('service/api/prInvestigador.php',JSON.stringify(usuario), {headers});
    }

    getTipoDocumento (tipo:TipoDocumento):Observable<TipoDocumento[]>{
      const headers = new HttpHeaders().set('content-type', 'application/json');  
      return this.http.post<TipoDocumento[]>('Investigacion/src/service/investigador/prInvestigador.php',JSON.stringify(tipo), {headers});
    }

    getInvestigador(investigador:Investigador) : Observable<Investigador>{
                   
       return this.http.post<Investigador>('app/service/investigador/prInvestigador.php',JSON.stringify(investigador), httpOptions);
     }  

 

}