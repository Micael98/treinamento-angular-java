import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastrar-clientes',
  templateUrl: './cadastrar-clientes.component.html',
  styleUrls: ['./cadastrar-clientes.component.css']
})
export class CadastrarClientesComponent implements OnInit {

  constructor() { }

  @Input()
  label: string = '';

  @Input()
  type = 'text' || 'email' || 'password';

  ngOnInit(): void {
  }

}
