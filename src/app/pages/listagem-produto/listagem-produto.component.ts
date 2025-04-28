import { Component } from '@angular/core';
import { Produto } from '../../core/types/type';
import { ProdutoService } from '../../core/produto';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listagem-produto',
  imports: [RouterModule, CommonModule ],
  templateUrl: './listagem-produto.component.html',
  styleUrl: './listagem-produto.component.css'
})
export class ListagemProdutoComponent {
  listaProdutos: Produto[] = [];
  constructor(
    private service: ProdutoService,
    private router: Router
  ) { }
  ngOnInit(): void {
    this.service.listar().subscribe((produtos) => {
      this.listaProdutos = produtos;
    });
  }
  excluir(id: number) {
    if (id) {
      this.service.excluir(id).subscribe(() => {
        window.location.reload()
      })
    }
  }
}
