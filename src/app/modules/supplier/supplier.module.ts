import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupplierRoutingModule } from './supplier-routing.module';
import { SupplierComponent } from './supplier.component';
import { HomeSupplierComponent } from './home-supplier/home-supplier.component';
import { HeaderSupplierComponent } from './header-supplier/header-supplier.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthModule } from '../auth/auth.module';
import { FooterSupplierComponent } from './footer-supplier/footer-supplier.component';
import { NewProductComponent } from './new-product/new-product.component';


@NgModule({
  declarations: [
    SupplierComponent,
    HomeSupplierComponent,
    HeaderSupplierComponent,
    FooterSupplierComponent,
    NewProductComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AuthModule,
    SupplierRoutingModule,
  ],
  bootstrap: [SupplierComponent]
})
export class SupplierModule { }
