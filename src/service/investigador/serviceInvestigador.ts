import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Investigador, TipoDocumento, Centro } from 'src/entidad/investigador/entidad.investigador';
import { Observable } from 'rxjs';
import { Usuario } from 'src/entidad/usuario/entidad.usuario';


const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json charset=utf-8','Accept': 'application/json'})
  };

@Injectable()
export class InvestigadorService {


    constructor(
        public http: HttpClient
    ){}

    getValidar(usuario:Usuario) : Observable<Usuario>{
                   
      const headers = new HttpHeaders().set('content-type', 'application/json');  
      return this.http.post<Usuario>('Investigacion/src/service/investigador/prInvestigador.php',JSON.stringify(usuario), {headers});
    }

    getTipoDocumento (tipo:TipoDocumento):Observable<TipoDocumento[]>{
      const headers = new HttpHeaders().set('content-type', 'application/json');  
      return this.http.post<TipoDocumento[]>('Investigacion/src/service/investigador/prInvestigador.php',JSON.stringify(tipo), {headers});
    }

    getListCentro (centro:Centro):Observable<Centro[]>{
      const headers = new HttpHeaders().set('content-type', 'application/json');  
      return this.http.post<Centro[]>('Investigacion/src/service/investigador/prInvestigador.php',JSON.stringify(centro), {headers});
    }

    getInvestigador(investigador:Investigador) : Observable<Investigador>{
                   
       return this.http.post<Investigador>('app/service/investigador/prInvestigador.php',JSON.stringify(investigador), httpOptions);
     }  

 

}