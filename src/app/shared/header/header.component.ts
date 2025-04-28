import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  exibirLogo: boolean = true;
  itensMenu = [
    { label: 'Home', link: '' },
    { label: 'Login', link: 'pagina/login' },
    { label: 'Cadastro de Produto', link: 'pagina/cadastro' },
    { label: 'Listagem de Produtos', link: 'pagina/listagem' },
  ]
}
