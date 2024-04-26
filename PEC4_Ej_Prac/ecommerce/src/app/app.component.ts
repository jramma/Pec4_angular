import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ArticleItemComponent } from './article-item/article-item.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ArticleItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ecommerce';
  articles = Array.from({ length: 12 }, (_, i) => ({
    name: `Producto ${i + 1}`,
    imageUrl: `https://picsum.photos/seed/${i + 1}/200`, // Genera una URL de imagen aleatoria
    price: +(Math.random() * 49 + 1).toFixed(2), // Genera un precio aleatorio entre 1 y 50 con decimales
    isOnSale: i % 2 === 0,
    quantityInCart: 1,
  }));
}

type Article = {
  name: string;
  imageUrl: string;
  price: number;
  isOnSale: boolean;
  quantityInCart: number;
};
