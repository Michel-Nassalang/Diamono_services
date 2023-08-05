import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/modules/auth/auth.guard';
import { AboutComponent } from './about/about.component';
import { AuthComponent } from '../auth/auth.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductComponent } from './product/product.component';
import { ServicesComponent } from './services/services.component';
import { StoreComponent } from './store/store.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { UserprofilComponent } from './userprofil/userprofil.component';
import { WishComponent } from './wish/wish.component';

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
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }
