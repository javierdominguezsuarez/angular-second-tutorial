import { Component, Input } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-list-view',
  templateUrl: './product-list-view.component.html',
  styleUrls: ['./product-list-view.component.css']
})
export class ProductListViewComponent {
  @Input()  product: Product | undefined

  share() {
    window.alert('The product has been shared!');
  }
}
