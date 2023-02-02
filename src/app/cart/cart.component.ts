import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  items = this.cartService.getItems()
  checkoutForm = this.formService.group({
    name: '',
    address: ''
  })
  onSubmit(): void {
    this.items = this.cartService.clearCart()
    console.warn('Your order has been submitted',this.checkoutForm.value)
    this.checkoutForm.reset()
    this.router.navigate(['/'])
  }

  constructor(private cartService: CartService, private formService: FormBuilder, private router: Router){}
}
