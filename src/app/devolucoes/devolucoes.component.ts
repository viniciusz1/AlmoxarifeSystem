import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-devolucoes',
  templateUrl: './devolucoes.component.html',
  styleUrls: ['./devolucoes.component.css']
})
export class DevolucoesComponent implements OnInit {


  constructor(
  ) {}


  lista = [
    {
      pedido: "001",
      Professor: "Carlinhos",
      Produtos: "Resistor 1k Ohms, Resistor 10k Ohms, Resistor 10k Ohms, Resistor 10kOhms, Resistor 10kOhms...",
      Data: "02/02/2022",
    },
    {
      pedido: "001",
      Professor: "Carlinhos",
      Produtos: "Resistor 1k Ohms, Resistor 10k Ohms, Resistor 10k Ohms, Resistor 10kOhms, Resistor 10kOhms...",
      Data: "02/02/2022",
    },
    {
      pedido: "001",
      Professor: "Carlinhos",
      Produtos: "Resistor 1k Ohms, Resistor 10k Ohms, Resistor 10k Ohms, Resistor 10kOhms, Resistor 10kOhms...",
      Data: "02/02/2022",
    },
    {
      pedido: "001",
      Professor: "Carlinhos",
      Produtos: "Resistor 1k Ohms, Resistor 10k Ohms, Resistor 10k Ohms, Resistor 10kOhms, Resistor 10kOhms...",
      Data: "02/02/2022",
    },
    {
      pedido: "001",
      Professor: "Carlinhos",
      Produtos: "Resistor 1k Ohms, Resistor 10k Ohms, Resistor 10k Ohms, Resistor 10kOhms, Resistor 10kOhms...",
      Data: "02/02/2022",
    },
    {
      pedido: "001",
      Professor: "Carlinhos",
      Produtos: "Resistor 1k Ohms, Resistor 10k Ohms, Resistor 10k Ohms, Resistor 10kOhms, Resistor 10kOhms...",
      Data: "02/02/2022",
    },
    {
      pedido: "001",
      Professor: "Carlinhos",
      Produtos: "Resistor 1k Ohms, Resistor 10k Ohms, Resistor 10k Ohms, Resistor 10kOhms, Resistor 10kOhms...",
      Data: "02/02/2022",
}]
  name = "";
  ngOnInit(): void { 
    


  }

}
