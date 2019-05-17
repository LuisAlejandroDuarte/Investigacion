import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Usuario } from 'src/entidad/usuario/entidad.usuario';
import { Observable } from 'rxjs';


const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json charset=utf-8','Accept': 'application/json'})
  };

@Injectable()
export class UsusarioService {


    constructor(
        public http: HttpClient
    ){}

    getListUsuarios(instrumento:Usuario) : Observable<Usuario>{
                   
       return this.http.post<Usuario>('app/usuario/prUsuario.php',JSON.stringify(instrumento), httpOptions);
     }  

}