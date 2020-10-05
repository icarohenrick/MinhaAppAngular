import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent {
  nav: Nav[] = [
    {
      link: '/home',
      name: 'Home',
      exact: true,
      admin: false
    },
    {
      link: '/cadastro',
      name: 'Cadastro',
      exact: true,
      admin: false
    },
    {
      link: '/sobre',
      name: 'Sobre',
      exact: true,
      admin: false
    },
    {
      link: '/filmes',
      name: 'Filmes',
      exact: true,
      admin: false
    },
    {
      link: '/bar',
      name: 'Bar',
      exact: true,
      admin: false
    },
    {
      link: '/todo',
      name: 'To Do',
      exact: false,
      admin: false
    },
    {
      link: '/produtos',
      name: 'Produtos',
      exact: false,
      admin: false
    },
    {
      link: '/admin',
      name: 'Admin',
      exact: false,
      admin: true
    }];
}

interface Nav {
  link: string,
  name: string,
  exact: boolean,
  admin: boolean
}
