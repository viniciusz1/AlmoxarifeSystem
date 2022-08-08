import { HistoricoComponent } from './historico/historico.component';
import { ModalDevolucaoComponent } from './modal-devolucao/modal-devolucao.component'
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
import { HistoricoService } from '../services/historico.service';
import { FiltroProdutosPipe } from '../pipes/filtro-produtos.pipe';
import { FormsModule } from '@angular/forms';
import { ExportsModule } from '../shared/exports/exports.module';
import { EntradaHistoricoComponent } from './historico/entrada-historico/entrada-historico.component';
import { EntradasService } from '../services/entradas.service';
import { DashboardComponent } from '../pedidos/dashboard/dashboard.component';
import {MatNativeDateModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import { HomeModule } from '../home/home.module';
import { PedidosTableComponent } from './pedidos-table/pedidos-table.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatFormFieldModule} from '@angular/material/form-field'
@NgModule({
  declarations: [
    ConferenciaComponent,
    DevolucoesComponent,
    ModalDevolucaoComponent,
    ModalDevolucaoComponent,
    PedidosComponent,
    HistoricoComponent,
    ConfirmarComponent,
    PedidoHistoricoComponent,
    FiltroHistoricoComponent,
    EntradaHistoricoComponent,
    DashboardComponent,
    PedidosTableComponent
  ],
  imports: [
    CommonModule,
    RotasModule,
    FormsModule,
    ExportsModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatCardModule,
    HomeModule,
    MatTooltipModule,
    MatFormFieldModule
  ],
  exports:[
    ConferenciaComponent,
    DevolucoesComponent,
    ModalDevolucaoComponent,
    ModalDevolucaoComponent,
    ConfirmarComponent,
  ],
  providers:[
    HistoricoService,
    EntradasService
  ]
})
export class PedidosModule { }
