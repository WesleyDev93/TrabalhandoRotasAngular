import { Component, OnInit } from '@angular/core';
// importando ActivatedRoute

import {ActivatedRoute, Router} from '@angular/router';




@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
// adicionamos ao contrutor o metodo para as rotas  e devemos importar o ActivateRoute
  // adicionaremos o router dentro do construtor
  constructor (private activeRoute: ActivatedRoute, private navegador: Router) {

    // vamos adicionar o caminho para pegar os parametros

    this.activeRoute.firstChild?.params.subscribe (
      res => console.log (res)
    )
  // metodo para usar os queryParams
   this.activeRoute.queryParams.subscribe (
    res => console.log (res)
   )

  }

  ngOnInit(): void {
  // vamos atribuir o evento de call beck agora depois de inserir o router
  // atraves do setInterval determinamos um intervalo de tempo para ocorrer o carregamento da pagina
  // Assim havera 5 segundos antes de ser redirecionado.
   setInterval (() => {
          this.navegador.navigate (['/'])
   }, 5000)
  }

}
