import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Investigador } from 'src/entidad/investigador/entidad.investigador';
import { Observable } from 'rxjs';


const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json charset=utf-8','Accept': 'application/json'})
  };

@Injectable()
export class InvestigadorService {


    constructor(
        public http: HttpClient
    ){}

    getValidar(investigador:Investigador) : Observable<Investigador>{
                   
      return this.http.post<Investigador>('app/usuario/prInvestigador.php',JSON.stringify(investigador), httpOptions);
    }

    getInvestigador(investigador:Investigador) : Observable<Investigador>{
                   
       return this.http.post<Investigador>('app/usuario/prInvestigador.php',JSON.stringify(investigador), httpOptions);
     }  

 

}