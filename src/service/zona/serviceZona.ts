import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Zona } from 'src/entidad/zona/entidad.zona';
import { Observable } from 'rxjs';
import { Usuario } from 'src/entidad/usuario/entidad.usuario';
import { Centro } from 'src/entidad/centro/entidad.centro';


const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json charset=utf-8','Accept': 'application/json'})
  };

@Injectable()
export class ZonaService {

    constructor(
        public http: HttpClient
    ){}
    
    getZonaByCentro (centro:Centro):Observable<Zona[]>{
      const headers = new HttpHeaders().set('content-type', 'application/json');  
      return this.http.post<Zona[]>('Investigacion/src/service/zona/prZona.php',JSON.stringify(centro), {headers});
    }  

}