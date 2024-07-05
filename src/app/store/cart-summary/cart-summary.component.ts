import { Component } from '@angular/core';
import { Cart } from 'src/models/cart.model';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.scss'],
})
export class CartSummaryComponent {
  constructor(public cart: Cart) {}
}
