import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Product } from '../products';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-product-cart-view',
  templateUrl: './product-cart-view.component.html',
  styleUrls: ['./product-cart-view.component.css']
})
export class ProductCartViewComponent {
  @Input()  product: Product | undefined
  @Output() removeEvent = new EventEmitter<number>()
  removeItem(value: number) {
    this.removeEvent.emit(value);
  }
  
}
