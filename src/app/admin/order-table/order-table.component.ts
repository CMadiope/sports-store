import {
  Component,
  DoCheck,
  IterableDiffer,
  IterableDiffers,
  OnInit,
} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Order } from 'src/models/order.model';
import { OrderRepository } from 'src/models/order.repository';

@Component({
  selector: 'app-order-table',
  templateUrl: './order-table.component.html',
  styleUrls: ['./order-table.component.scss'],
})
export class OrderTableComponent implements OnInit, DoCheck {
  colsAndRows: string[] = ['name', 'zip', 'cart_p', 'cart_q', 'buttons'];

  dataSource = new MatTableDataSource<Order>(this.repository.getOrders());
  differ: IterableDiffer<Order>;

  constructor(private repository: OrderRepository, differs: IterableDiffers) {
    this.differ = differs.find(this.repository.getOrders()).create();
    this.dataSource.filter = 'true';
    this.dataSource.filterPredicate = (order, include) => {
      return !order.shipped || include.toString() == 'true';
    };
  }

  ngOnInit() {}
  ngDoCheck() {
    let changes = this.differ?.diff(this.repository.getOrders());
    if (changes != null) {
      this.dataSource.data = this.repository.getOrders();
    }
  }

  get includeShipped(): boolean {
    return this.dataSource.filter == 'true';
  }
  set includeShipped(include: boolean) {
    this.dataSource.filter = include.toString();
  }
  toggleShipped(order: Order) {
    order.shipped = !order.shipped;
    this.repository.updateOrder(order);
  }
  delete(id: number) {
    this.repository.deleteOrder(id);
  }
}
