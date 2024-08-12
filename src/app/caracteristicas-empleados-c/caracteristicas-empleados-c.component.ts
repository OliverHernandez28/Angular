import { Component, Output, EventEmitter } from '@angular/core';
import { ServicioEmpleadosService } from '../servicio-empleados.service';
import { EmpleadosServiceService } from '../empleados-service.service';

@Component({
  selector: 'app-caracteristicas-empleados-c',
  templateUrl: './caracteristicas-empleados-c.component.html',
  styleUrls: ['./caracteristicas-empleados-c.component.css'] // Corrige 'styleUrl' a 'styleUrls'
})
export class CaracteristicasEmpleadosCComponent {
  @Output() caracteristicasEmpleados = new EventEmitter<string>();
  @Output() nombre = new EventEmitter<string>();

  constructor(private miService:EmpleadosServiceService){}
 
  agregarCaracteristicas(value:string){
     this.miService.muestraMensaje(value) 
    this.caracteristicasEmpleados.emit(value)

    
  }

  agregarNombre(value:string){
    this.nombre.emit(value)
  }
}
