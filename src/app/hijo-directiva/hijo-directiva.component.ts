import { Component, Input } from '@angular/core';
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
}

