import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';
import {ActivatedRoute, Params} from '@angular/router';
import { ProductInterface } from 'src/app/models/product-interface';

@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html',
  styleUrls: ['./details-product.component.css']
})
export class DetailsProductComponent implements OnInit {

  constructor(public dataApi: DataApiService, public route: ActivatedRoute) { }

  public product: ProductInterface={
    nombre:'',
    descripcion:'',
    precio:'',
    foto:''
  };
  ngOnInit() {

    const product_id = this.route.snapshot.params["id"];
    this.getDetails(product_id);


  }

    getDetails(id: string){
      this.dataApi.getProductById(id)
      .subscribe(product => (this.product = product));
    }

}


