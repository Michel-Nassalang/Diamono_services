import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ImageModule } from 'primeng/image';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { DialogModule } from 'primeng/dialog';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { SidebarModule } from 'primeng/sidebar';
import { GalleriaModule } from 'primeng/galleria';
import { RatingModule } from 'primeng/rating';
import { AccordionModule } from 'primeng/accordion';

import { ButtonModule } from 'primeng/button';
import { TabViewModule } from 'primeng/tabview';
import { AuthModule } from 'src/app/modules/auth/auth.module';
import { ClientsComponent } from './clients.component';
import { AboutComponent } from './about/about.component';
import { NewsletterComponent } from './artefact/newsletter/newsletter.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductComponent } from './product/product.component';
import { ServicesComponent } from './services/services.component';
import { StoreComponent } from './store/store.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { UserprofilComponent } from './userprofil/userprofil.component';
import { WishComponent } from './wish/wish.component';
import { ChatModule } from 'src/app/modules/chat/chat.module';


@NgModule({
  declarations: [
    ClientsComponent,
    NotFoundComponent,
    AboutComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    CheckoutComponent,
    ThankyouComponent,
    ProductComponent,
    StoreComponent,
    CartComponent,
    ServicesComponent,
    NewsletterComponent,
    UserprofilComponent,
    WishComponent,
  ],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule,
    NgxSliderModule,
    ScrollPanelModule,
    DialogModule,
    SidebarModule,
    DynamicDialogModule,
    ButtonModule,
    GalleriaModule,
    RatingModule,
    AccordionModule,
    TabViewModule,
    ImageModule,
    AuthModule,
    ClientsRoutingModule,
    ChatModule
  ],
  bootstrap: [ClientsComponent],
})
export class ClientsModule { }
