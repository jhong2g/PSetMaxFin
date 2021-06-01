import { Component, OnInit } from '@angular/core';
import {DataApiService} from '../../../services/data-api.service';
import {ProductInterface} from '../../../models/product-interface';
import { AuthService } from 'src/app/services/auth.service';
import { BuysInterface } from 'src/app/models/buys-inteface';

@Component({
  selector: 'app-shoppingcar',
  templateUrl: './shoppingcar.component.html',
  styleUrls: ['./shoppingcar.component.css']
})
export class ShoppingcarComponent implements OnInit {

  constructor(public dataApiService: DataApiService, public authService: AuthService) { }

  public buys: BuysInterface;
  public products: ProductInterface;

  public listProducts:Array<any> = []

  ngOnInit() {

    this.getListBuys();
    this.getListProducts();

  }

  getListBuys(){
    this.dataApiService.getIdUserBuys().subscribe((buys: BuysInterface) => (this.buys = buys));
  }

  getListProducts():void{
    this.dataApiService.getAllProducts()
    .subscribe((products:ProductInterface)=>(this.products=products));
  }

}
