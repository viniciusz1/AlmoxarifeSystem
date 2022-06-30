import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {


  lista = [
    {
      titulo: "sadoif",
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
      titulo: "sadfsdfsda",
      item1: "1342421",
      item2: "432423441",
      item3: "4232131",
    },
    {
      titulo: "sadoifjpsdçn",
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

   getLista(){
      return this.lista
   }
  constructor() { }
}
