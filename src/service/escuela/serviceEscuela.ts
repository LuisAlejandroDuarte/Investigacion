import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Programa } from 'src/entidad/programa/entidad.programa';
import { Escuela } from 'src/entidad/escuela/entidad.escuela';


const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json charset=utf-8','Accept': 'application/json'})
  };

@Injectable()
export class EscuelaService {

    constructor(
        public http: HttpClient
    ){}
    
    getListEscuelaByPrograma (programa:Programa):Observable<Escuela[]>{
      const headers = new HttpHeaders().set('content-type', 'application/json');  
      return this.http.post<Escuela[]>('Investigacion/src/service/escuela/prEscuela.php',JSON.stringify(programa), {headers});
    }  

}