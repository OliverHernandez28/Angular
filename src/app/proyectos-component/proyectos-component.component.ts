import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioEmpleadosService } from '../servicio-empleados.service';
import { Empleado } from '../directiva/empleado.model';


@Component({
  selector: 'app-proyectos-component',
  templateUrl: './proyectos-component.component.html',
  styleUrl: './proyectos-component.component.css'
})
export class ProyectosComponentComponent implements OnInit {
constructor(private router: Router, private Miservice:ServicioEmpleadosService){}
formNombre:string=""
formApellido:string=""
formCargo:string=""
formSalario:number=0

ngOnInit(): void {
  this.empleados=this.Miservice.empleados; 
}
volverHome(){
this.router.navigate(['']);
}
empleados:Empleado[]=[
];


agregarEmpleado(){
  if(this.formNombre!=""){
    /* this.Miservice.muestraMensaje(`Nuevo empleado agregado ${this.formNombre}`); */
    let empleado= new Empleado(this.formNombre,this.formApellido,this.formCargo,this.formSalario)

    this.Miservice.agregarEmpleadoServicio(empleado)
    this.empleados=this.Miservice.empleados; 

  this.formNombre=""
  this.formApellido=""
  this.formCargo=""
  this.formSalario=0
 this.volverHome()
}
else {
  alert("Campos incorrecto 🥸")
}
  }


}
