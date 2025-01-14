import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/models/product.model';
import { ProductRepository } from 'src/models/product.repository';

@Component({
  selector: 'app-product-editor',
  templateUrl: './product-editor.component.html',
  styleUrls: ['./product-editor.component.scss'],
})
export class ProductEditorComponent implements OnInit {
  editing: boolean = false;
  product: Product = new Product();

  constructor(
    private repository: ProductRepository,
    private router: Router,
    activeRoute: ActivatedRoute
  ) {
    this.editing = activeRoute.snapshot.params['mode'] == 'edit';
    if (this.editing) {
      Object.assign(
        this.product,
        repository.getProduct(activeRoute.snapshot.params['id'])
      );
    }
  }

  save() {
    this.repository.saveProduct(this.product);
    this.router.navigateByUrl('/admin/main/products');
  }

  ngOnInit() {}
}
