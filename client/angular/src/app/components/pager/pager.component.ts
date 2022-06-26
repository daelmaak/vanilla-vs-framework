import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { ProductListService } from 'src/app/services/product-list.service';

@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PagerComponent {
  @Output() paging = new EventEmitter<{ page: number; size?: number }>();

  constructor(protected productListService: ProductListService) {}

  onPaging(change: number) {
    this.paging.emit({ page: this.productListService.page + change });
  }
}
