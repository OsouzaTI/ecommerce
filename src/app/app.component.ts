import { Component, OnInit } from '@angular/core';
import { ProdutosService } from './services/produtos.service';
import { Produto } from './types/produto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private _produtos: Array<Produto> = [];

  public get produtos(): Array<Produto> {
    return this._produtos;
  }

  public set produtos(value: Array<Produto>) {
    this._produtos = value;
  }

  title = 'ecommerce';

  constructor (private produtosService : ProdutosService) {}

  ngOnInit(): void {
    
    this.produtosService.getProdutos().subscribe(res => this.produtos = res)

  }

}
