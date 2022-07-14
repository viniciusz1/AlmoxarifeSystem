import { HistoricoComponent } from './historico/historico.component';
import { ModalDevolucaoComponent } from './modal-devolucao/modal-devolucao.component'
import { EntregasComponent } from './entregas/entregas.component'
import { DevolucoesComponent } from './devolucoes/devolucoes.component'
import { ConferenciaComponent } from './conferencia/conferencia.component'
import { PedidosComponent } from './pedidos.component'
import { NgModule } from '@angular/core';
import { ConfirmarComponent } from './confirmar/confirmar.component';
import { CommonModule } from '@angular/common';
import { PedidoHistoricoComponent } from './historico/pedido-historico/pedido-historico.component';
import { Routes } from '@angular/router';
import { RotasModule } from '../rotas.module';
import { FiltroHistoricoComponent } from './historico/filtro-historico/filtro-historico/filtro-historico.component';


@NgModule({
  declarations: [
    ConferenciaComponent,
    DevolucoesComponent,
    EntregasComponent,
    ModalDevolucaoComponent,
    ModalDevolucaoComponent,
    PedidosComponent,
    HistoricoComponent,
    ConfirmarComponent,
    PedidoHistoricoComponent,
    FiltroHistoricoComponent
  ],
  imports: [
    CommonModule,
    RotasModule
  ],
  exports:[
    ConferenciaComponent,
    DevolucoesComponent,
    EntregasComponent,
    ModalDevolucaoComponent,
    ModalDevolucaoComponent,
    ConfirmarComponent
  ]
})
export class PedidosModule { }
