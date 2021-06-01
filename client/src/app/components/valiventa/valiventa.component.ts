import { Component, OnInit } from '@angular/core';
import { UserInterface } from 'src/app/models/user-interface';
import { AuthService } from 'src/app/services/auth.service';
import {Router} from '@angular/router';
import { NgForm } from '@angular/forms';


import {DataApiService} from '../../services/data-api.service';
import {ProductInterface} from '../../models/product-interface';
import {VentaService} from '../../services/venta.service';
import {VentaInterface} from '../../models/venta-interface';

import { Location } from '@angular/common';


@Component({
  selector: 'app-valiventa',
  templateUrl: './valiventa.component.html',
  styleUrls: ['./valiventa.component.css']
})
export class ValiventaComponent implements OnInit {
  
  constructor(
    public ventaService: VentaService,
    public location: Location,
    public authService: AuthService,
    public dataapiService: DataApiService
  ) { 
    
  }
  user: UserInterface;
  ngOnInit() {
  }
  for (Total) {
    Total= parseInt("",10)
    
  }
  
  identificador = this.authService.getCurrentUser().tienda;
  

  
  onSaveVenta(ventaForm: NgForm): void {
    if (ventaForm.value.ventaId == null) {
      // NEW
      this.ventaService.saveVenta(ventaForm.value).subscribe(venta => location.reload());
    } else {
      
    }
  }

}