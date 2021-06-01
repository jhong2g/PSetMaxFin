import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';
import {AuthService} from './auth.service';
import {map} from 'rxjs/operators';
import{ ProductInterface} from '../models/product-interface';
import{ VentaInterface} from '../models/venta-interface';

import { UserInterface } from 'src/app/models/user-interface';
import { BuysInterface } from 'src/app/models/buys-inteface';

@Injectable({
  providedIn: 'root'
})
export class VentaService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  ventas: Observable<any>;
  venta: Observable<any>;
  buy: Observable<any>;
  user: UserInterface;

  public selectedVenta: VentaInterface = {
    id:null,
    nombre: '',
    direccion:'',
    telefono:'',
    total:'',
    //cambio
    identifacorusuario:''
  };

  public selectedBuy: BuysInterface = {
    id:null,
    iduser: '',
    idproduct: ''
  };


  headers : HttpHeaders = new HttpHeaders({
    "Content-Type":"application/json",
    Authorization: this.authService.getToken()
  });

  getAllVenta(){ 
    const url_api = 'http://localhost:3000/api/ventas';
    return this.http.get(url_api);
  }

  getIdUserVenta(){ 
    this.user=this.authService.getCurrentUser();
    
    const iduser: string = this.user.tienda;
    
    const url_api = `http://localhost:3000/api/ventas?filter[where][identifacorusuario]=${iduser}`;
    
    return this.http.get(url_api);
  }

  getVentaById(id:string){
    const url_api = `http://localhost:3000/api/ventas/${id}`;
    return (this.venta = this.http.get(url_api));
  }
  
  saveVenta(venta: VentaInterface){
    const token = this.authService.getToken();
    const url_api = `http://localhost:3000/api/ventas?access_token=${token}`;
    return this.http.post<VentaInterface>(url_api, venta,{headers: this.headers})
    .pipe(map(data => data));

  }

  

  deleteVenta(id: string){
    const token = this.authService.getToken();
    const url_api = `http://localhost:3000/api/ventas/${id}/?access_token=${token}`;
    return this.http.delete<VentaInterface>(url_api,{headers: this.headers})
    .pipe(map(data => data));

  }

  

}