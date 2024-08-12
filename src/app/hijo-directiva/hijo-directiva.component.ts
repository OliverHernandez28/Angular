import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Empleado } from '../directiva/empleado.model';

@Component({
  selector: 'app-hijo-directiva',
  templateUrl: './hijo-directiva.component.html',
  styleUrl: './hijo-directiva.component.css'
})
export class HijoDirectivaComponent {
@Input() empleados:any=[];
@Input() empleadodeLista:Empleado;
@Input() indice:number;
@Input() odd:boolean;



caracteristicas:string[]=[]
addCaracteristica(item:string){
  this.caracteristicas.push(item)
}

nombre:string
addNombre(item:string){
  this.nombre=item
  this.agregarPropiedad(item)
}




@Output() propiedad = new EventEmitter<string>();
agregarPropiedad(value:string){
  this.propiedad.emit(value)
}

}

