import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.css']
})
export class ArticleItemComponent implements OnInit {
  article = {
    name: 'Artículo de prueba',
    price: 100,
    imageUrl: 'assets/imagen.jpg',
    isOnSale: true,
    quantityInCart: 10
  };

  constructor() { }

  ngOnInit(): void {
  }

}
