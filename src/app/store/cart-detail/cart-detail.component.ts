import { Component } from '@angular/core';
import { Cart } from 'src/models/cart.model';
import { ConnectionService } from 'src/models/connection.service';

@Component({
  selector: 'app-cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.scss'],
})
export class CartDetailComponent {
  public connected: boolean = true;

  constructor(public cart: Cart, private connection: ConnectionService) {
    this.connected = this.connection.connected;
    connection.Changes.subscribe((state) => (this.connected = state));
  }
}
