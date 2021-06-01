import { Component, OnInit} from '@angular/core';


//dependencias para traer datos de productos
import {DataApiService} from '../../../services/data-api.service';
import {ProductInterface} from '../../../models/product-interface';
import { AuthService } from 'src/app/services/auth.service';
import { BuysInterface } from 'src/app/models/buys-inteface';



@Component({
  selector: 'app-endbuy',
  templateUrl: './endbuy.component.html',
  styleUrls: ['./endbuy.component.css']
})
export class EndbuyComponent implements OnInit {


  

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

  onDeleteBuy(id: string): void {
    if (confirm('¿esta seguro que quiere eliminar este producto?')) {
      this.dataApiService.deleteBuy(id).subscribe();
    }
  }
  
  getListProducts():void{
    this.dataApiService.getAllProducts()
    .subscribe((products:ProductInterface)=>(this.products=products));
  }
  
  

  
  
}
