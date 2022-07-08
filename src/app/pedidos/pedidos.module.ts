import { HistoricoComponent } from './historico/historico.component';
import { ModalDevolucaoComponent } from './modal-devolucao/modal-devolucao.component'
import { EntregasComponent } from './entregas/entregas.component'
import { DevolucoesComponent } from './devolucoes/devolucoes.component'
import { ConferenciaComponent } from './conferencia/conferencia.component'
import { PedidosComponent } from './pedidos.component'
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    ConferenciaComponent,
    DevolucoesComponent,
    EntregasComponent,
    ModalDevolucaoComponent,
    ModalDevolucaoComponent,
    PedidosComponent,
    HistoricoComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ConferenciaComponent,
    DevolucoesComponent,
    EntregasComponent,
    ModalDevolucaoComponent,
    ModalDevolucaoComponent
  ]
})
export class PedidosModule { }
