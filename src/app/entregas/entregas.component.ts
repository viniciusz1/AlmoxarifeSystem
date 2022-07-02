import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entregas',
  templateUrl: './entregas.component.html',
  styleUrls: ['./entregas.component.css']
})
export class EntregasComponent implements OnInit {


  contador = 1;

  constructor() { }

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

  ngOnInit(): void {
  }

}
