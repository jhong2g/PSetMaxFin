import { EventEmitter, Injectable, Output } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  @Output() disparadorCarrito: EventEmitter<any> = new EventEmitter();
  
}