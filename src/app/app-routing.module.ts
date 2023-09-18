import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TitleComponent } from './pages/index/title/title.component';
import { CardComponent } from './pages/portifolio/card/card.component';

const routes: Routes = [
  // Cria nossa rota passando pra ela qual o caminho , o componente e rota
  //full quer dizer rota exata sem variação na URL
  // prefix tem variaçãoes
  {path: '', component: TitleComponent, pathMatch: 'full'},
   // recuperar paramentos colocamos /:id assim ele vai criar um id para
   // podermos usar esse id
  {path: 'portifolio/:id', component: CardComponent, pathMatch: 'prefix'},

  {path:'**',redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
