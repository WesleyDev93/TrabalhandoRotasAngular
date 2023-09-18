import { Component, OnInit } from '@angular/core';
// importando ActivatedRoute

import {ActivatedRoute} from '@angular/router';




@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
// adicionamos ao contrutor o metodo para as rotas  e devemos importar o ActivateRoute
  constructor (private activeRoute: ActivatedRoute) {

    // vamos adicionar o caminho para pegar os parametros

    this.activeRoute.params.subscribe (
      res => console.log (res)
    )
  // metodo para usar os queryParams
   this.activeRoute.queryParams.subscribe (
    res => console.log (res)
   )

  }

  ngOnInit(): void {

  }

}
