import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Programa } from 'src/entidad/programa/entidad.programa';
import { environment } from 'src/environments/environment';


const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json charset=utf-8','Accept': 'application/json'})
  };

@Injectable()
export class ProgramaService {
  baseUrl =environment.apiUrl;
    constructor(
        public http: HttpClient
    ){}
    
    getListPrograma (programa:Programa):Observable<Programa[]>{
      const headers = new HttpHeaders().set('content-type', 'application/json');  
      return this.http.post<Programa[]>(this.baseUrl + 'prPrograma.php',JSON.stringify(programa), {headers});
    }  

}