import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  modal = false;
  modalOpen(arg: boolean | Event) {
    this.modal = !this.modal
  }
  openCart(){
    this.carState = "aberto"
    console.log(this.state)
  }
  state = "fechado";
  carState = "aberto";
  closeCart(param: boolean | Event){
    this.carState = "fechado"
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
  ngOnInit(): void {
  }

}
