import { Injectable } from '@angular/core';
import { Empleado } from './directiva/empleado.model';
import { EmpleadosServiceService } from './empleados-service.service';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class ServicioEmpleadosService {

  constructor(private servicioVentanaEmergente:EmpleadosServiceService,private dataService:DataService) {
   }

   empleados:Empleado[]=[]
setEmpleados(misEmpleados:Empleado[]){
  this.empleados=misEmpleados;
}


   obtenerEmpleados(){
    return this.dataService.recuperaEmpleados()
   }
  
  agregarEmpleadoServicio(empleado:Empleado){
    this.servicioVentanaEmergente.muestraMensaje("Empleado agregado con exito")
    this.empleados.push(empleado)
    this.dataService.guardarEmpleados(this.empleados)
  }

  editarEmpleadoServicio(empleado:Empleado,indiceEmpleado:number){
    this.servicioVentanaEmergente.muestraMensaje("Empleado editado correctamente");
    let emplea=this.empleados[indiceEmpleado]
    emplea.nombre=empleado.nombre
    emplea.apellido=empleado.apellido
    emplea.cargo=empleado.cargo
    emplea.salario=empleado.salario
    this.dataService.actualizaEmpleados(indiceEmpleado,empleado)
  }


  eliminaEmpleadoService(indice:number){
    this.servicioVentanaEmergente.muestraMensaje("Usuario eliminado correctamente");
    this.empleados.splice(indice,1)
    this.dataService.eliminaEmpleados(indice)

    if(this.empleados!=null)
       this.dataService.guardarEmpleados(this.empleados)
  }

}
