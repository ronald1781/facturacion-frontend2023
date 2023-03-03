import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from './cliente';
 
@Injectable({
  providedIn: 'root'
})
export class ClienteService {

private RutaAPIrest ="http://localhost:8081/cliente";
  constructor(private httpclient : HttpClient) { }

  obtenerListaDeClientes():Observable<Cliente[]>{
    return this.httpclient.get<Cliente[]>(`${this.RutaAPIrest}`);
  }
}

