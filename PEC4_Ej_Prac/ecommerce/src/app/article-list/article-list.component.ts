import { Component } from '@angular/core';
import { ArticleItemComponent } from '../article-item/article-item.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-article-list',
  standalone: true,
  imports: [ArticleItemComponent, CommonModule],
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.css',
})
export class ArticleListComponent {
  articles: Article[] = ['Artículo 1', 'Artículo 2', 'Artículo 3'].map(
    (name, i) => ({
      name,
      imageUrl: `https://picsum.photos/seed/${i + 1}/200`,
      price: 100 * (i + 1),
      quantityInCart: 10 * (i + 1),
      isOnSale: i !== 2,
    })
  );
}
type Article = {
  name: string;
  imageUrl: string;
  price: number;
  isOnSale: boolean;
  quantityInCart: number;
};
interface ArticleQuantityChange {
  article: Article;
  change: number;
}
