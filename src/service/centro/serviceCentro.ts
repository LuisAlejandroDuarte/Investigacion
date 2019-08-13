import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Centro } from 'src/entidad/centro/entidad.centro';
import { Observable } from 'rxjs';
import { Usuario } from 'src/entidad/usuario/entidad.usuario';


const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json charset=utf-8','Accept': 'application/json'})
  };

@Injectable()
export class CentroService {

    constructor(
        public http: HttpClient
    ){}
    
    getListCentro (centro:Centro):Observable<Centro[]>{
      const headers = new HttpHeaders().set('content-type', 'application/json');  
      return this.http.post<Centro[]>('Investigacion/src/service/centro/prCentro.php',JSON.stringify(centro), {headers});
    }  

}