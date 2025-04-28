import { Injectable } from '@angular/core';
import { Produto } from './types/type';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private readonly API = 'http://localhost:3000/produtos'

  constructor(private http: HttpClient) { }

  listar(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.API)
  }
  incluir(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(this.API, produto)
  }
  editar(produto: Produto): Observable<Produto> {
    const url = `${this.API}/${produto.id}`
    return this.http.put<Produto>(url, produto)
  }
  buscarPorId(id: number): Observable<Produto | undefined> {
    return this.http.get<Produto>(this.API + `/${id}`);
  }
  excluir(id: number): Observable<Produto> {
    return this.http.delete<Produto>(this.API + `/${id}`);
  }
}
