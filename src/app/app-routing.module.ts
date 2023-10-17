import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './composants/home/home.component';
import { ProduitListComponent } from './composants/produits/produit-list/produit-list.component';
import { EnregistrementComponent } from './connexion/enregistrement/enregistrement.component';
import { IdentificationComponent } from './connexion/identification/identification.component';
import { ContactComponent } from './composants/contact/contact.component';
import { CartComponent } from './composants/cart/cart.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'acceuil', component:HomeComponent},
  {path:'produit', component:ProduitListComponent},
  {path:'connexion', component:EnregistrementComponent},
  {path:'identification', component:IdentificationComponent},
  {path:'contact', component:ContactComponent},
  {path:'cart', component:CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
