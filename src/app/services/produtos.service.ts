import { FormControl } from '@angular/forms';
import { Injectable } from '@angular/core';
import { Produto } from '../shared/produto.model';

@Injectable({
  providedIn: 'root'
})

export class ProdutosService {

  private lista: Produto[] =
  [
  new Produto ("Resistor Elétrico", 1, "Material Elétrico", "produto", "Descartável", "Descrição", 1, "https://s4.static.brasilescola.uol.com.br/img/2017/01/resistor.jpg"),
  new Produto ("Prego", 1, "Material Elétrico", "produto", "Descartável", "Descrição", 2, "data:image/png;base64,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"),
  new Produto ("Martelo", 1, "Material Elétrico", "produto", "Descartável", "Descrição", 3,"https://toolsbr.fbitsstatic.net/img/p/real-steel-martelo-rip-claw-20-oz-175538/362995.jpg?w=480&h=651&v=no-change&qs=ignore"),
  new Produto ("Chave de Fenda", 1, "Material Elétrico", "produto", "Descartável", "Descrição", 4,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa4QWJgrx2TmR6JEzBjVOnLvBr5Fu-3kAXPg&usqp=CAU"),
  new Produto ("Chave philips", 1, "Material Elétrico", "produto", "Descartável", "Descrição", 12,"https://www.fg.com.br/arquivos/ids/333387-undefined-undefined/Chave-Philips-1-4x6-PH2-Cromo-Vanadio---Gedore---036320-160-1-4-x-6-PH2---GEDORE.jpg?v=637700501314430000"),
  new Produto ("Parafuso", 1, "Material Elétrico", "produto", "Descartável", "Descrição", 5,"https://cdn.leroymerlin.com.br/products/parafuso_aco_para_madeira_4,5x30mm_auto_atarraxante_10_pecas_86938642_d05e_600x600.jpg"),
  new Produto ("Alicate", 1, "Material Elétrico", "produto", "Descartável", "Descrição", 6,"data:image/jpeg;base64,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"),
  new Produto ("Fio sólido", 1, "Material Elétrico", "produto", "Descartável", "Descrição", 7, "data:image/jpeg;base64,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"),
  new Produto ("Cabo de Rede", 1, "Material Elétrico", "produto", "Descartável", "Descrição", 8, "https://a-static.mlcdn.com.br/800x560/cabo-rede-montado-rj45-6m-oem/in-pactoinformatica/7346/26aefb2404fb5ab0284b2928730ef395.jpg"),
  new Produto ("Tomada", 1, "Material Elétrico", "produto", "Descartável", "Descrição", 9,"https://cdn.leroymerlin.com.br/products/conjunto_de_tomada_de_energia_2p_t_10a_4x2_cinza_pial_plus__90723311_0001_600x600.jpg"),
  new Produto ("Interruptor", 1, "Material Elétrico", "produto", "Descartável", "Descrição", 10,"https://s2.glbimg.com/pxZNYt4gfHPpl5gMX5XmqgxuJOQ=/0x0:809x588/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/J/n/WOWQQlRqKNyUFQXKd9pA/interruptor-agl.jpg"),
  new Produto ("Lâmpada", 1, "Material Elétrico", "produto", "Descartável", "Descrição", 11, "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxASEA4QDw8PEBASDxAQEhAQDRAOEA8QFREWFhUYFRcYHTQgGBsnGxMTIT0jJSorLi4uGCAzODMsNygtLisBCgoKDg0OFxAQFysdFRktLS0rLSsrLS0tKysrLSstLSsrLTctNystLS03LTcrLTcrKy0rLS0tKystKy0rKysrK//AABEIALEBHAMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABAUBAgMGB//EAD0QAAIBAgMECAMFBQkAAAAAAAABAgMRBBIhBTFBUQYTImFxgZHBMqGxFEJictEHI4KSojNSU7LCw+Hw8f/EABcBAQEBAQAAAAAAAAAAAAAAAAABAgP/xAAbEQEBAQACAwAAAAAAAAAAAAAAARESUSExQf/aAAwDAQACEQMRAD8A+4gAAAAAAAAAAAAAAAAAAAYbtq9EBkFdiNrRTywi6kuGuWHq/ZMg19p4pNWhRivy1az9Vb6FwX4KSltWt9+FNLzjf1lf5E2htKMt6ce9dpfr8hhqcDWEk1dNNc1qbEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWc0k29yA1r1lFXfkuLZXVZSm7y3cI8F+pmcnJ5n5LkgakZtaqK5IxUpJ/Erm4KjlChBbor0/7zZ0yoyatgIScXeL8uD8Sww9dSXJ8UVwUmmpLeiWEq3BzoVVKKa9OTOhlsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIWOndxh/E/Ymla3ec3+Jr009iwYlyN6dO+rNTu9IlSRHaMABlhmoBpkMo3jT0uaEax1wU8s7cJfUsSpm7WfKz9GWxmtQABFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAq4b5/nn/mZaFU1apUX4m/XX3LBsmSJ/CRmdes0sVHGckt5rUmkm27JK78Cu2pJyhUte0Yt+S49+528GzvFZ6alLW8LqO9LTjzZUxKNVJNtJ6rf3HNdhXXwcV/d8O7uIOGU06lVa5p5mm38D1jblo0VMXtH4WcGdaFROnmW5/8AjODMxaVfh9S2juXgVU1fLHm0vVlsSrAAEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBtCnZxmvyv29yeaVaalFxe5oCtuaTjdNXtdNXXAQum096dmbG2ajwpLLKm1vVt+9WtoRMJio06cVUlb92m2+aj2v182WU4J7yBgqMXSjmim1UnG7Sb7NaUPYEZw2Pp1YKNOd20k7xlF8no13M3pyeapbW7UYrgklq35tryRthMPG9Tsr4rbvwRZz2TrRhP8AxM1Vc8s5Ocf6ZJBb4TYJRgoR3K/m27v6mUaipKyCe3bBxzTvwjr58Pcsjhg6OWOu96vxO5mtAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAK/aFOzU1ufZl48H7ehxRZ1qalFxe5qxWU7213q6fitGaiVkg4D+zkuWKxHzxU2vk0T7EDDxaliFw6+M433W6qm3/UplSGKquFHFTW+Km498lRi18yTQoqEIQW6EYwXhFWX0IeOTtGHCpiKTvwtBxm0/HqrfxFn1btfgFrSKOmEpZp5nuj82avcyfhqeWKXHe/ElpHUAGVAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKxrt1V+P6xT9yzKysrVZ3+9lkv5VH/SWDsl2GeWe3qdOeIhKM241al3GOa0VdcNX8LVlqenjNZWinw1CLeIdld1YX033bT+hYRWYnbtOqqEYRq3eKwms6UqV19ppp9mXaXmj1t+x5lLiMKl1LSSSrblpoqE5L5pMunbLbiKOaV3Fc5L6osSBBdqC77+Vv+CeSgACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABD2nH93OaV5QjKS1teyu1fvsTDniEnCalucZJ2u3a2oHmsBth1cP8AaVCMaeXNd1HorflPBy/azgKcqiUuszTUrx65LRt6Xp95a9Gq1sNWovP9nvUUY3o3cLu2ZOWbdbcfItsbKw9OrNUqNOUVN2U6eI0V93xozybzp9i2J09w2MVqK3S49YtcjjxhykerxGNnCHWOleNuFS3sfIP2f4rJLLHB4SKve8MybfnNn0DpHteusPJOnTprK9Y1Kkna3JU2icqvF6zYOLVelDEKLjnzJRbu0ozcX84lmU3Q2jKGAwkZWuqMXdO976p+LTv4suTcc6AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABrVvlla17O1917cTY1nFNNNXTTTT3NPeB826MTlKFd9ZBzc6l25Usrbk75U43tfkz5b0toyVermpwleb1jTgr682z63sXDdX9qoSVurq1YqPWOEcuZ5dOPZaPmvSajh6deonWw1B3Tyzw8JtJq+/q5HN0bdBowU9c0deGVJfyo9z0ghTdCXVwrVnlfxrETj9UjzvQx3fYxNCav92NWH+1FHq+kVFzotVKsVpuhCnUk/BZyNfHsuicYrBYRRjKEephaM/ijpr8791rFsQdh4edPDUKdSbnONOKcmsreml1ztZE46xxAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABpUT4EGtSq8GBYXXMxnXNepSzoVubOMqFbvAlbW2XCq1UhNU6yVlPKpRkuClF7z430g6T1qeIrUqtDDyq0p5Z0p4WpFtWupxlTrJSi1bhfU+ruhW7yp2p0XpYhuVehGcmks+qnZXt2lqt7M2NSvn+G6c1acFP7Fg4JtJRhhZSqN7tM9Ro+tbE2fCdKjVxNOCqtRn1byyjSe9aJJZt3DRnmsB0FwtFxdPD3ytOOecqiTTutJM9EqFbvEha9EprmvUzc8/GhW5s706FbmzTK6BCo06i3smRvxAyAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAxYWMgDFjNgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//2Q==")
]

   getListaProdutos(){
      return this.lista
   }
   getIdProduto(id: number){
    let index = this.lista.findIndex(lista => lista.codigo == id);
    return this.lista[index]
   }
   addProduto(produto: Produto){
    if(!produto.codigo){
      produto.codigo = this.lista.length + 1
    }    
    this.lista.push(produto)
    console.log(this.lista)
   }

   changeQuantidadeProduto(codigo: number, quantidade:number){
    let index = this.lista.findIndex(lista => lista.codigo == codigo);
    if(this.isDefined(this.lista[index].quantidade) && !isNaN(quantidade)){
      let a = this.lista[index].quantidade as number
      let b = +quantidade
      this.lista[index].quantidade = a + b
    }
   }

   isDefined<T>(val: T | undefined | null): val is T {
    return val !== undefined && val !== null;
  }

   changeProduto(produto: Produto){

    let index = this.lista.findIndex(e => 
      e.codigo == produto.codigo
    )
    this.lista[index] = produto
  }
  constructor() { }
}
