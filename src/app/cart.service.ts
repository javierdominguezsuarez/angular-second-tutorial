import { Injectable } from '@angular/core';
import { Product } from './products';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[]= []
  addToCart(product: Product){
    this.items.push(product)
  }
  getItems(){
    return this.items
  }
  getTotalPrice(){
    return this.items
      .map(item => item.price)
      .reduce((prev, curr) => prev + curr, 0)
  }
  removeItem(id: number){
    this.items = this.items.filter(item => item.id != id)
    return this.items.filter(item => item.id != id)
  }
  clearCart(){
    this.items = []
    return this.items
  }
  getShippingPrices() {
    return this.http.get<{type: string, price: number}[]>('/assets/shipping.json');
  }
  constructor( private http: HttpClient) { }
}
