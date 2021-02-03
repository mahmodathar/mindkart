import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListOrderComponent } from './orders/list-order/list-order.component';

const routes: Routes = [{ path: 'products', loadChildren: () => import('./orders/products/products.module').then(m => m.ProductsModule) },
{path:'order', component:ListOrderComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
