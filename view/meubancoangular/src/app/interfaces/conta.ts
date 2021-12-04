import { ICliente } from "./cliente";

export interface IConta {
  id: number;
  cliente: ICliente;
  numero: string;
  agencia: string;
  saldo: number;
}
