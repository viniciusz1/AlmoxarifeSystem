import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-entregas',
  templateUrl: './entregas.component.html',
  styleUrls: ['./entregas.component.css']
})
export class EntregasComponent implements OnInit {

  constructor(
    private route: ActivatedRoute
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
