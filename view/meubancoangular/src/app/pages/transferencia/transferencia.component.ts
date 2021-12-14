import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ITransferencia } from 'src/app/interfaces/transferencia';
import { ContaService } from 'src/app/services/conta.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-transferencia',
  templateUrl: './transferencia.component.html',
  styleUrls: ['./transferencia.component.css']
})
export class TransferenciaComponent implements OnInit {

  formGroup: FormGroup = new FormGroup ({
    agenciaDestino: new FormControl ('',Validators.required),
    agenciaOrigem: new FormControl ('', Validators.required),
    numeroContaDestino: new FormControl('', Validators.required),
    numeroContaOrigem: new  FormControl ('',Validators.required),
    valor: new FormControl ('',Validators.required),

  })

  constructor(private contaService: ContaService, private router: Router) { }

  ngOnInit(): void {
  }

  transferir(){
    const transferencia: ITransferencia = this.formGroup.value;
    this.contaService.transferencia(transferencia).subscribe(contaAPI => {
      this.router.navigate(['/contas']);
      Swal.fire('funfou','Transferência Efetuada!', 'success');

    }, error => {
      console.log(error);
    })

    console.log(this.formGroup.value);
  }

}
