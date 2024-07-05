import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { StoreComponent } from './store.component';
import { CartDetailComponent } from './cart-detail/cart-detail.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CounterDirective } from './counter.directive';
import { ModelModule } from 'src/models/model.module';
import { CommonModule } from '@angular/common';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';

@NgModule({
  imports: [
    ModelModule,
    BrowserModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  declarations: [
    StoreComponent,
    CounterDirective,
    CartSummaryComponent,
    CartDetailComponent,
    CheckoutComponent,
  ],
  exports: [
    StoreComponent,
    CartDetailComponent,
    CheckoutComponent,
    CounterDirective,
  ],
  providers: [CounterDirective],
})
export class StoreModule {}
