import { Component } from '@angular/core';
import { Iproduit } from 'src/app/service/produit';

@Component({
  selector: 'app-produit-list',
  templateUrl: './produit-list.component.html',
  styleUrls: ['./produit-list.component.css']
})
export class ProduitListComponent {


  public produits: Iproduit[] = [
    {
      produitId: 1,
      produitName: 'Mimbo South Africe',
      imageUrl: '/assets/images/img3.jpeg',
      description: 'Wine cooler, équilibré avec des notes florales, fruité avec un équilibre fraicheur arome très réussi',
      price: 2000
    },
    {
      produitId: 2,
      produitName: "Natur'L",
      imageUrl: '/assets/images/img2.jpeg',
      description: 'Jus naturel fabriqué au Cameroun à base de concentré de fruits multiples. Excellent accompagnateur pour vos repas. Riche en vitamine C pour le plein d’énergie.',
      price: 1000
    },
    {
      produitId: 3,
      produitName: "Compal",
      imageUrl: '/assets/images/img4.jpeg',
      description: 'Jus naturel importé. Excellent accompagnateur pour vos repas. Riche en vitamine C pour le plein d’énergie.',
      price: 2000
    },
    {
      produitId: 4,
      produitName: "Paul Arras",
      imageUrl: '/assets/images/img7.jpeg',
      description: 'vin de table de très bonne qualité. Excellent accompagnateur pour vos repas. idéal pour des grandes receptions.',
      price: 3500
    },
    {
      produitId: 5,
      produitName: "Chivas",
      imageUrl: '/assets/images/img10.jpeg',
      description: 'Liqueur de grand crue. Excellent accompagnateur pour vos repas. ',
      price: 18000
    },
    {
      produitId: 2,
      produitName: "MAONOL",
      imageUrl: '/assets/images/img5.jpeg',
      description: 'Votka alcoliséé et arromatiséé au fruits exotiques',
      price: 12500
    }
  ];

}
