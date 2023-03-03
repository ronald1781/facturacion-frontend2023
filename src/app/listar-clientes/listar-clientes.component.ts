import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-listar-clientes',
  templateUrl: './listar-clientes.component.html',
  styleUrls: ['./listar-clientes.component.css']
})
export class ListarClientesComponent implements OnInit {
  clientes: Cliente[];
  constructor(private clienteservicio:ClienteService) { }

  ngOnInit(): void {
  this.Obtenerclientes();

  }

  private Obtenerclientes(){
    this.clienteservicio.obtenerListaDeClientes().subscribe(dato =>
      {this.clientes=dato});

  }
}
