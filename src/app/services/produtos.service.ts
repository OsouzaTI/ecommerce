import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Produto } from '../types/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private http : HttpClient) { }

  public getProdutos() : Observable<Array<Produto>> {
    return this.http.get<Array<Produto>>('https://fakestoreapi.com/products')
      .pipe(response => response, error => error);
  }

}
