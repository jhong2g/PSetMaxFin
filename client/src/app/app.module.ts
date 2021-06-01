import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { DetailsProductComponent } from './components/details-product/details-product.component';
import { ListProductsComponent } from './components/admin/list-products/list-products.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { Page404Component } from './components/page404/page404.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TruncateTextPipe } from './pipes/truncate-text.pipe';
//services
import { DataApiService } from 'src/app/services/data-api.service';
import { ModalComponent } from './components/modal/modal.component';
import { EndbuyComponent } from './components/shopping/endbuy/endbuy.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SalesComponent } from './components/shopping/sales/sales.component';
import { ShoppingcarComponent } from './components/shopping/shoppingcar/shoppingcar.component';
import { ValiventaComponent } from './components/valiventa/valiventa.component';
import { ListVentasComponent } from './components/admin/list-ventas/list-ventas.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    HeroComponent,
    DetailsProductComponent,
    ListProductsComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    Page404Component,
    ModalComponent,
    EndbuyComponent,
    TruncateTextPipe,
    SalesComponent,
    ShoppingcarComponent,
    ValiventaComponent,
    ListVentasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,

  ],
  providers: [DataApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
