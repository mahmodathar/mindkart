import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateProductComponent } from './update-product/update-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { ViewProductByDateComponent } from './view-product-by-date/view-product-by-date.component';
import { ViewProductByCategoryComponent } from './view-product-by-category/view-product-by-category.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ViewAllProductComponent } from './view-all-product/view-all-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { ProductsComponent } from './products.component';

const routes: Routes = [
  { path: '', component: ViewAllProductComponent },
  { path:'add-product', component: AddProductComponent},

  { path:'view-product', component: ProductsComponent},
  //{ path:'list-product', component: ViewAllProductComponent},

  { path:'category/:id', component: ViewProductByCategoryComponent},
  { path:'searchdate', component: ViewProductByDateComponent},
  { path:'dalete-product/:id', component: DeleteProductComponent},
  { path:'view-product/:id', component: ViewProductComponent},
  { path:'update-product', component: UpdateProductComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
