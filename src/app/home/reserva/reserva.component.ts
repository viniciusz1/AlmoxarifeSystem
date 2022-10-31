import { Usuario } from 'src/app/shared/usuario.model';
import { ReservaService } from './../../services/reserva.service';
import { map } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { Observable, startWith } from 'rxjs';
import { Pedido } from './../../shared/pedido.model';
import { PedidosService } from './../../services/pedidos.service';
import { CarrinhoService } from 'src/app/services/carrinho.service';
import { Produto } from 'src/app/shared/produto.model';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HistoricoService } from 'src/app/services/historico.service';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit {
  @Output() fechaReserva = new EventEmitter<boolean>();
  listaCarrinho: Produto[] = [];
  dataRetirada: Date = new Date();
  dataDevolucao: Date = new Date();
  user = "atendente"
  // user= "professor"

  filtroData = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  };


  fecharReserva() {
    this.fechaReserva.emit(false)
  }
  addPedido(){
    let produtos = []
    let quantidades = []
    for(let i of this.listaCarrinho){
      produtos.push({
        codigo: i.codigo
      })      
    }
    for(let i of this.listaCarrinho){
      quantidades.push(i.qtdCart)      
    }

    this.pedidoService.addEntrega(produtos, quantidades, this.dataRetirada, this.dataDevolucao, localStorage.getItem('USUARIO'))
    .subscribe({next: e => console.log(e),
    error: x => console.log(x)})
    // this.fecharReserva()
  }

  constructor(private car: CarrinhoService,
    private pedidoService: PedidosService,
    private reservaService: ReservaService) { }

  private _filter(value: string): Usuario[] {
    const filterValue = value.toLowerCase();
    return this.listaProfessores.filter(option => {
      return option.nome?.toLowerCase().includes(filterValue);
    });
  }

  professor = new FormControl('');
  listaProfessores: Usuario[] = [];
  filteredProfessores: Observable<Usuario[]> = new Observable;

  ngOnInit(): void {
    this.reservaService.getListaProfessores().subscribe(e => {
      this.listaProfessores = e;
    })

    this.filteredProfessores = this.professor.valueChanges.pipe(
      startWith(''),
      map(value =>  this._filter(value || '')),
    );

    this.listaCarrinho = this.car.getLista();
    this.car.tamanhoCarrinho.subscribe(
      e => {
        if (e != 0) {
        }
      }
    )
  }

}
