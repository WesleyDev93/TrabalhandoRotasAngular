import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TitleComponent } from './pages/index/title/title.component';
import { CardComponent } from './pages/portifolio/card/card.component';

const routes: Routes = [
  // Cria nossa rota passando pra ela qual o caminho , o componente e rota
  //full quer dizer rota exata sem variação na URL
  // prefix tem variaçãoes
  {path: '', component: TitleComponent, pathMatch: 'full'},


  {path:'**',redirectTo: ''},


  // novo path para inserir as rotas filhas

  {path:'portifolio', component: CardComponent, children: [
  // recuperar paramentos colocamos /:id assim ele vai criar um id para
   // podermos usar esse id
   // colocamos agora esse path dentro da rota filha
   {path: ':id', component: CardComponent, pathMatch: 'prefix'},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
