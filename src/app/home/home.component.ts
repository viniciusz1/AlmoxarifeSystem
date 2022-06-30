import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from '../services/carrinho.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private car: CarrinhoService) { }
  modal = false;
  modalReserva: boolean = false;
  state = "fechado";
  carState = "aberto";

  mudarModalReserva(arg: boolean | Event){
    this.modalReserva = !this.modalReserva;
    console.log(this.modalReserva);
  }
  
  modalOpen(arg: boolean | Event) {
    this.modal = !this.modal
  }
  openCart(){
    this.carState = "aberto"
    console.log(this.state)
  }
  closeCart(param: boolean | Event){
    this.carState = "fechado"
  }
  

  ngOnInit(): void {
  }


  lista = [
    {
      titulo: "sadoifjpasod",
      item1: "1342421",
      item2: "432423441",
      item3: "4232131",
    },
    {
      titulo: "sadoifjpasod",
      item1: "1342421",
      item2: "432423441",
      item3: "4232131",
    },
    {
      titulo: "sadfsdfsdafasdfsadfaoifjpasod",
      item1: "1342421",
      item2: "432423441",
      item3: "4232131",
    },
    {
      titulo: "sadoifjpsdçnjlsdçfnjsdçknlfsdçfnuosdçfnksdafnjkasod",
      item1: "1342421",
      item2: "432423441",
      item3: "4232131",
    },
    {
      titulo: "sadoifjpasod",
      item1: "1342421",
      item2: "432423441",
      item3: "4232131",
    },
    {
      titulo: "sadoifjpasod",
      item1: "1342421",
      item2: "432423441",
      item3: "4232131",
    },
    {
      titulo: "sadoifjpasod",
      item1: "1342421",
      item2: "432423441",
      item3: "4232131",
    },
    {
      titulo: "sadoifjpasod",
      item1: "1342421",
      item2: "432423441",
      item3: "4232131",
    },
    {
      titulo: "sadoifjpasod",
      item1: "1342421",
      item2: "432423441",
      item3: "4232131",
    },
   ]
  

}
