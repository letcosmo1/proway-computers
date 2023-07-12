import { Injectable } from '@angular/core';
import { ProdutosInterface, produtos } from './produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  produtos: ProdutosInterface[] = produtos;

  constructor() { }

  getAllProducts(): ProdutosInterface[] {
    return produtos;
  }
  getProduct(product_id: number)  {
    return this.produtos?.find(produtos => produtos.id === product_id);
  }
}
