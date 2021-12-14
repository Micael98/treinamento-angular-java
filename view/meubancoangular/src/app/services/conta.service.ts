import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IConta } from '../interfaces/conta';
import { ISaqueDeposito } from '../interfaces/saque-deposito';
import { ITransferencia } from '../interfaces/transferencia';


@Injectable({
  providedIn: 'root'
})
export class ContaService {

api = `${environment.api}/contas/`

constructor(private http:HttpClient) { }

listarTodasContas() {
    return this.http.get<IConta[]>(this.api);
}

saque(saque: ISaqueDeposito){
  return this.http.post(`${this.api}/saque`, saque);
}

deposito(deposito: ISaqueDeposito){
  return this.http.post(`${this.api}/deposito`,deposito);
}

transferencia(transferencia: ITransferencia){
  return this.http.post(`${this.api}/transferencia`, transferencia);
}



  }





