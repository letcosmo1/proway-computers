import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from '../carrinho.service';
import { ProdutoCarrinhoInterface } from '../produtos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit{
  itens_carrinho: ProdutoCarrinhoInterface[] = [];
  total: number = 0;

  constructor(private carrinho_service: CarrinhoService, private router: Router) {}
  
  ngOnInit(): void {
    this.itens_carrinho = this.carrinho_service.obterCarrinho();
    this.carrinho_service.carregarCarrinho();
    this.calcularTotal();
  }

  novoArray(size: number) {
    const array: Number[] = [];
    for(let i = 1; i <= size; i++) {
      array.push(i);
    }
    return array;
  }

  removerProdutoCarrinho(id: number) {
    this.carrinho_service.removerProdutoCarrinho(id);
    this.itens_carrinho = [];
    this.itens_carrinho = this.carrinho_service.obterCarrinho();
    this.calcularTotal();
  }

  calcularTotal() {
    this.total = this.itens_carrinho.reduce((prev, curr) => prev + (curr.preco * curr.quantidade), 0);
  }

  atualizarQuantidade(item: ProdutoCarrinhoInterface) {
    const html_select = document.getElementById(String(item.id)) as HTMLInputElement | null;
    item.quantidade = Number(html_select?.value);
    this.carrinho_service.atualizarCarrinho(this.itens_carrinho);
    this.calcularTotal();
  }

  finalizarCompra() {
    alert("Compra finalizada com sucesso!");
    this.carrinho_service.limparCarrinho();
    this.itens_carrinho = [];
    this.router.navigate(["produtos"]);
  }
}
