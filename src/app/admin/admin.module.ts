import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AuthGuard } from '../guards/auth.guard';
import { MaterialFeatures } from './material.module';
import { OrderTableComponent } from './order-table/order-table.component';
import { ProductEditorComponent } from './product-editor/product-editor.component';
import { ProductTableComponent } from './product-table/product-table.component';
import { AuthService } from 'src/models/auth.service';
import { RestDataSource } from 'src/models/rest.datasource';

let routing = RouterModule.forChild([
  { path: 'auth', component: AuthComponent },
  {
    path: 'main',
    component: AdminHomeComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'products/:mode/:id', component: ProductEditorComponent },
      { path: 'products/:mode', component: ProductEditorComponent },
      { path: 'products', component: ProductTableComponent },
      { path: 'orders', component: OrderTableComponent },
      { path: '**', redirectTo: 'products' },
    ],
  },
  { path: '**', redirectTo: 'auth' },
]);
@NgModule({
  imports: [CommonModule, FormsModule, routing, MaterialFeatures],
  declarations: [
    AuthComponent,
    AdminHomeComponent,
    OrderTableComponent,
    ProductTableComponent,
    ProductEditorComponent,
  ],
  providers: [AuthGuard],
})
export class AdminModule {}
