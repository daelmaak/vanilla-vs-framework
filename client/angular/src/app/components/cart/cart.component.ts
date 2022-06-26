import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartComponent implements OnInit {
  constructor(protected cartService: CartService) {}

  ngOnInit(): void {}

  onQuantityChange(product: Product, change: number) {
    this.cartService.updateQuantity(product, change);
  }

  orderCartItemsBy() {
    return 0;
  }

  trackCartItemsBy(_: number, entry: any) {
    return entry.key;
  }
}
