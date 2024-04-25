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
  articles = [
    {
      name: 'Producto Falso 1',
      price: 100,
      quantity: 0
    },
    {
      name: 'Producto Falso 2',
      price: 200,
      quantity: 0
    },
    {
      name: 'Producto Falso 3',
      price: 300,
      quantity: 0
    }
  ];
}
