import { Component, OnInit } from '@angular/core';
import { ProdutosInterface, produtos } from '../produtos';
import { ProdutosService } from '../produtos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {
  produtos: ProdutosInterface[] | undefined;
  
  constructor(private produtos_service: ProdutosService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const produtos = this.produtos_service.getAllProducts();
    this.route.queryParamMap.subscribe(params => {
      const descricao = params.get("descricao")?.toLocaleLowerCase();

      if(descricao) {
        this.produtos = this.produtos_service.getAllProducts().filter(produto => produto.descricao.toLocaleLowerCase().includes(descricao));
        return;
      }

      this.produtos = produtos;
    });
  }
}
