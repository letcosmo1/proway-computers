import { Injectable } from '@angular/core';
import { ProdutoCarrinhoInterface } from './produtos';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  itens: ProdutoCarrinhoInterface[] = [];

  constructor() { }

  carregarCarrinho() {
    this.itens = this.obterCarrinho();
  }

  obterCarrinho() {
    return JSON.parse(localStorage.getItem("carrinho") || "[]");
  }

  atualizarCarrinho(itens: ProdutoCarrinhoInterface[]) {
    localStorage.setItem("carrinho", JSON.stringify(itens));
  }
  
  adicionarAoCarrinho(produto: ProdutoCarrinhoInterface) {
    this.itens = this.obterCarrinho();
    if(this.itens.find(item => item.id === produto.id) == undefined) {
      this.itens.push(produto);
      localStorage.setItem("carrinho", JSON.stringify(this.itens));
      return true;
    }
    return false;
  }
  
  limparCarrinho() {
    this.itens = [];
    localStorage.clear();
  }

  removerProdutoCarrinho(id: number) {
    this.itens = this.itens.filter(item => item.id !== id);
    localStorage.setItem("carrinho", JSON.stringify(this.itens));
  }
}
