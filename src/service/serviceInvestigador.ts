import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpInterceptor} from '@angular/common/http';
import { Investigador, TipoDocumento } from 'src/entidad/investigador/entidad.investigador';
import { Observable } from 'rxjs';
import { Usuario } from 'src/entidad/usuario/entidad.usuario';
import { environment } from 'src/environments/environment';


const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json charset=utf-8','Accept': 'application/json'})
  };

@Injectable()
export class InvestigadorService {
    baseUrl =environment.apiUrl;
    constructor(
        public http: HttpClient
    ){}

    getValidar(usuario:Usuario) : Observable<Usuario>{
                   
      const headers = new HttpHeaders().set('content-type', 'application/json');  
      return this.http.post<Usuario>(this.baseUrl + 'prInvestigador.php',JSON.stringify(usuario), {headers});
    }

    getTipoDocumento (tipo:TipoDocumento):Observable<TipoDocumento[]>{
      const headers = new HttpHeaders().set('content-type', 'application/json');  
      return this.http.post<TipoDocumento[]>(this.baseUrl + 'prInvestigador.php',JSON.stringify(tipo), {headers});
    }

    getInvestigador(investigador:Investigador) : Observable<Investigador>{                   
       return this.http.post<Investigador>(this.baseUrl + 'prInvestigador.php',JSON.stringify(investigador), httpOptions);
     }  
}