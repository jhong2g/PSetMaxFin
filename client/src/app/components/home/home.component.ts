import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';
import {ProductInterface} from '../../models/product-interface';

import { UserInterface } from 'src/app/models/user-interface';
import { AuthService } from 'src/app/services/auth.service';

import { NgForm } from '@angular/forms';
import { CarritoService } from 'src/app/services/carrito.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

   // los datos se van guardando en un arreglo, el cual se usa para
  // desplegar la tabla
  //public productos:any[] = [];

  // los input del formulario se asocian con un modelo
  //producto:any = {};
  
  constructor(private dataApi: DataApiService, public authService: AuthService,public _service: CarritoService) {

    

  }
  public products: ProductInterface;
  user: UserInterface;
  
  identificador = this.authService.getCurrentUser().tipo;
  correo = this.authService.getCurrentUser().email;

  ngOnInit(): void {

    
    //console.log(this.identificador);
    if (this.identificador === 'Cliente') {
      this.getListProducts2();
    } else if(this.identificador === 'Vendedor'){
      this.getListProducts();
    }

  }
  
  //Guardar id de producto en el array 
  onSaveProduct(buysForm: NgForm): void {
    //this._service.disparadorCarrito.emit( buysForm.value );
    this.dataApi.saveBuy(buysForm.value).subscribe(buys => location.reload());
  }

  getListProducts(){
    this.dataApi
    .getIdUserProducts()
    .subscribe((products: ProductInterface) => (this.products = products));
  }

  getListProducts2(){
    this.dataApi
    .getAllProducts()
    .subscribe((products: ProductInterface) => (this.products = products));
    
  }
  

}
