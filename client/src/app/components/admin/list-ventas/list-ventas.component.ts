import { Component, OnInit } from '@angular/core';
import {VentaService} from '../../../services/venta.service';
import {VentaInterface} from '../../../models/venta-interface';

import { UserInterface } from 'src/app/models/user-interface';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-list-ventas',
  templateUrl: './list-ventas.component.html',
  styleUrls: ['./list-ventas.component.css']
})
export class ListVentasComponent implements OnInit {
//eje
message: string;

constructor(public ventaService: VentaService, public authService: AuthService) { 

  this.message = this.authService.getCurrentUser().id;

}
user: UserInterface;
public ventas: VentaInterface;


ngOnInit(): void {
  this.getListVentas();
}

getListVentas():void{
  this.ventaService.getIdUserVenta()
  .subscribe((ventas:VentaInterface)=>(this.ventas=ventas));
}

onDeleteVenta(id: string): void {
  if (confirm('¿esta seguro que quiere eliminar esta venta?')) {
    this.ventaService.deleteVenta(id).subscribe();
  }
}

onPreUpdateProduct(venta: VentaInterface):void{
  this.ventaService.selectedVenta=Object.assign({},venta);

}



}