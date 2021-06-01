import { Component, OnInit } from '@angular/core';
import {DataApiService} from '../../services/data-api.service';
import {ProductInterface} from '../../models/product-interface';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';

import { UserInterface } from 'src/app/models/user-interface';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  
  constructor(
    public dataApiService: DataApiService,
    public location: Location,
    public authService: AuthService
  ) { 
    
  }
  user: UserInterface;
  ngOnInit() {
  }

  identificador = this.authService.getCurrentUser().tienda;
  

  
  onSaveProduct(productForm: NgForm): void {
    if (productForm.value.productId == null) {
      // NEW
      this.dataApiService.saveProduct(productForm.value).subscribe(product => location.reload());
    } else {
      // update
      this.dataApiService.updateProduct(productForm.value).subscribe(product => location.reload());
    }
  }

}