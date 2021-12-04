import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { DepositoComponent } from './pages/deposito/deposito.component';
import { ExtratoComponent } from './pages/extrato/extrato.component';
import { HomeComponent } from './pages/home/home.component';
import { SaqueComponent } from './pages/saque/saque.component';
import { ContasComponent } from './pages/contas/contas.component';
import { CadastroEdicaoClientesComponent } from './pages/clientes/cadastro-edicao-clientes/cadastro-edicao-clientes.component';


const routes: Routes = [
  { path:'',component: HomeComponent, pathMatch: 'full' },
  { path:'extrato',component: ExtratoComponent },
  { path:'deposito',component: DepositoComponent },
  { path:'saque',component: SaqueComponent },
  { path:'clientes',component: ClientesComponent},
  { path:'clientes/cadastrar',component: CadastroEdicaoClientesComponent},
  { path:'clientes/editar/:id',component: CadastroEdicaoClientesComponent},
  { path:'contas',component: ContasComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
