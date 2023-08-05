import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeSupplierComponent } from './home-supplier/home-supplier.component';
import { NewProductComponent } from './new-product/new-product.component';

const routes: Routes = [
  {path: 'supplier', component: HomeSupplierComponent},
  {path: 'supplier/new', component: NewProductComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupplierRoutingModule { }
