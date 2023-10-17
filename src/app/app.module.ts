import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProduitListComponent } from './composants/produits/produit-list/produit-list.component';
import { IdentificationComponent } from './connexion/identification/identification.component';
import { EnregistrementComponent } from './connexion/enregistrement/enregistrement.component';
import { ContactComponent } from './composants/contact/contact.component';
import { CartComponent } from './composants/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    ProduitListComponent,
    IdentificationComponent,
    EnregistrementComponent,
    ContactComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
