import { Component, OnInit } from '@angular/core';
import { ProductService } from '../products.service';
import { Produto } from '../produto';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
})
export class ListProductComponent implements OnInit {
  
  constructor(private produtoService: ProductService) { }

  public produtos: Produto[] = []
  
  ngOnInit(): void {
    this.produtoService.getProducts()
    .subscribe(
        produtos => {
          this.produtos = produtos;
          console.log(produtos);
        },
        error => console.log(error)
    );
  }
}
