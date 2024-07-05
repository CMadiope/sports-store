import {
  AfterViewInit,
  Component,
  DoCheck,
  IterableDiffer,
  IterableDiffers,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from 'src/models/product.model';
import { ProductRepository } from 'src/models/product.repository';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.scss'],
})
export class ProductTableComponent implements OnInit, DoCheck, AfterViewInit {
  colsAndRows: string[] = ['id', 'name', 'category', 'price', 'buttons'];
  dataSource = new MatTableDataSource<Product>(this.repository.getProducts());
  differ: IterableDiffer<Product>;

  @ViewChild(MatPaginator)
  paginator?: MatPaginator;

  constructor(private repository: ProductRepository, differs: IterableDiffers) {
    this.differ = differs.find(this.repository.getProducts()).create();
  }

  ngOnInit() {}
  ngDoCheck() {
    let changes = this.differ?.diff(this.repository.getProducts());
    if (changes != null) {
      this.dataSource.data = this.repository.getProducts();
    }
  }
  ngAfterViewInit(): void {
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
  }

  deleteProduct(id: number) {
    this.repository.deleteProduct(id);
  }
}
