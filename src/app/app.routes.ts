import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { CadastroDeProdutoComponent } from './pages/cadastro-de-produto/cadastro-de-produto.component';
import { ListagemProdutoComponent } from './pages/listagem-produto/listagem-produto.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home',
    },
    {
        path: 'pagina/login',
        component: LoginComponent,
        title: 'Login',
    },
    {
        path: 'pagina/cadastro',
        component: CadastroDeProdutoComponent,
        title: 'cadastro',
    },
    {
        path: 'pagina/listagem',
        component: ListagemProdutoComponent,
        title: 'listagem',
    },
    {
        path: 'pagina/alterar/:id',  
        component: CadastroDeProdutoComponent,
        title: 'Alteração de Cadastro',
    }
];
