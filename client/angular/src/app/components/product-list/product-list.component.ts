import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductListService } from 'src/app/services/product-list.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent implements OnInit {
  @Output() productSelected = new EventEmitter<Product>();

  constructor(protected productService: ProductListService) {}

  ngOnInit(): void {
    this.productService.loadProducts();
  }

  onPaging({ page }: { page: number }) {
    this.productService.loadProducts(page);
  }
}
