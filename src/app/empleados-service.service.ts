import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosServiceService {

  constructor() { }

  muestraMensaje(mesanje:string){
    alert(mesanje)
  }
}
