import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule aquí

@Component({
  selector: 'app-article-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './article-item.component.html',
  styleUrl: './article-item.component.css',
})
export class ArticleItemComponent implements OnInit {
  @Input() article: Article = {
    name: '',
    imageUrl: '',
    price: 0,
    isOnSale: false,
    quantityInCart: 0,
  };

  constructor() {}

  ngOnInit(): void {}

  addQuantity(): void {
    this.article.quantityInCart++;
  }
  removeQuantity(): void {
    if (this.article.quantityInCart > 0) {
      this.article.quantityInCart--;
    }
  }
}
type Article = {
  name: string;
  imageUrl: string;
  price: number;
  isOnSale: boolean;
  quantityInCart: number;
};
