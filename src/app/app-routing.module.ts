import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './modules/auth/auth.component';
import { AuthGuard } from './modules/auth/auth.guard';
import { AboutComponent } from './modules/clients/about/about.component';
import { CartComponent } from './modules/clients/cart/cart.component';
import { CheckoutComponent } from './modules/clients/checkout/checkout.component';

import { HomeComponent } from './modules/clients/home/home.component';
import { NotFoundComponent } from './modules/clients/not-found/not-found.component';
import { ProductComponent } from './modules/clients/product/product.component';
import { ServicesComponent } from './modules/clients/services/services.component';
import { StoreComponent } from './modules/clients/store/store.component';
import { ThankyouComponent } from './modules/clients/thankyou/thankyou.component';
import { UserprofilComponent } from './modules/clients/userprofil/userprofil.component';
import { WishComponent } from './modules/clients/wish/wish.component';
import { HomeSupplierComponent } from './modules/supplier/home-supplier/home-supplier.component';
import { NewProductComponent } from './modules/supplier/new-product/new-product.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'shop', component: StoreComponent },
  { path: 'product', component: ProductComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'about', component: AboutComponent },
  { path: 'thankyou', component: ThankyouComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'cart', component: CartComponent, canActivate: [AuthGuard] },
  { path: 'wish', component: WishComponent, canActivate: [AuthGuard] },
  { path: 'userprofil', component: UserprofilComponent, canActivate: [AuthGuard] },
  { path: 'services', component: ServicesComponent },
  { path: 'supplier', component: HomeSupplierComponent },
  { path: 'supplier/new', component: NewProductComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
