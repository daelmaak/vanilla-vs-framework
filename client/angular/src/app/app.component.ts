import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Product } from './models/product.model';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  constructor(private cartService: CartService) {}

  onProductSelected(product: Product) {
    this.cartService.addProduct(product);
  }
}
