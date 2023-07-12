import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarrinhoService } from 'src/app/carrinho.service';
import { NotificacaoService } from 'src/app/notificacao.service';
import { ProdutoCarrinhoInterface, ProdutosInterface } from 'src/app/produtos';
import { ProdutosService } from 'src/app/produtos.service';

@Component({
  selector: 'app-detalhes-produto',
  templateUrl: './detalhes-produto.component.html',
  styleUrls: ['./detalhes-produto.component.css']
})
export class DetalhesProdutoComponent implements OnInit {
  produto: ProdutosInterface | undefined;
  quantidade_estoque: number = 1;
  array_quantidade_estoque: number[] = [0];
  html_select = document.getElementsByTagName("select");
  quantidade: number = 1;

  constructor(
    private route: ActivatedRoute,
    private produtos_service: ProdutosService,
    private notificacao_service: NotificacaoService,
    private carrinho_service: CarrinhoService
    ) {}
  
  ngOnInit(): void {
    const route_params = this.route.snapshot.paramMap;
    const id = Number(route_params.get("id"));
    this.produto = this.produtos_service.getProduct(id);
    this.quantidade_estoque = Number(this.produto?.quantidade_estoque);
    for(let i = 1; i <= this.quantidade_estoque; i++) {
      i === 1 ? this.array_quantidade_estoque = []: null;
      this.array_quantidade_estoque.push(i);
    }
  }

  obterQuantidade() {
    this.quantidade = Number(this.html_select[0].value);
  }

  adicionarAoCarrinho() {
    const produto_carrinho: ProdutoCarrinhoInterface = {
      ...this.produto!,
      quantidade: this.quantidade
    }
    if(this.carrinho_service.adicionarAoCarrinho(produto_carrinho)) {
      this.notificacao_service.notificar("'"+ this.produto?.descricao + "' foi adicionado ao carrinho");
    } else {
      this.notificacao_service.notificar("'"+ this.produto?.descricao + "' já está no seu carrinho");
    }
  }
}
