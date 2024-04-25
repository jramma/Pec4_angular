import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-item',
  standalone: true,
  imports: [],
  templateUrl: './article-item.component.html',
  styleUrl: './article-item.component.css'
})
export class ArticleItemComponent implements OnInit {
  article = {
    name: 'Producto',
    price: 100,
    quantity: 0
  };

  constructor() { }

  ngOnInit(): void {
  }

  addQuantity(): void {
    this.article.quantity++;
  }

  removeQuantity(): void {
    if (this.article.quantity > 0) {
      this.article.quantity--;
    }
  }
}
