import { Component } from '@angular/core';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { ProdutoService } from '../../core/produto';
import { Produto } from '../../core/types/type';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-produto-form',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './cadastro-de-produto.component.html',
  styleUrl: './cadastro-de-produto.component.css'
})
export class CadastroDeProdutoComponent {

  titulo = 'Cadastro de Produtos';

  produtoId?: number;
  produto: Produto = {} as Produto;

  constructor(
    private service: ProdutoService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.produtoId = Number(this.route.snapshot.params['id']);
    console.log('Buscando produto com id:', this.produtoId);
    if (this.produtoId) {
      service.buscarPorId(this.produtoId).subscribe(produto => {
        if (produto) {
          this.produto.id = produto.id;
          this.produto.nome = produto.nome;
          this.produto.descricao = produto.descricao;
          this.produto.preco = produto.preco;
          this.produto.categoria = produto.categoria;
          this.produto.estoque = produto.estoque;
        }
      })
    }
  }

  submeter() {
    console.log('submeter() chamado com:', this.produto);
    if (this.produtoId) {
      this.service.editar(this.produto).subscribe(() => {
        this.router.navigate(['pagina/listagem']);
      })
    } else {
      this.service.incluir(this.produto).subscribe(() => {
        this.router.navigate(['pagina/listagem']);
      })
    }
  }
}
