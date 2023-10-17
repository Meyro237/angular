import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { ProduitListComponent } from '../produits/produit-list/produit-list.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
{path:'produit', redirectTo:'/acceuil/produit', component:ProduitListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
