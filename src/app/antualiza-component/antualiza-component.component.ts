import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicioEmpleadosService } from '../servicio-empleados.service';
import { Empleado } from '../directiva/empleado.model';


@Component({
  selector: 'app-antualiza-component',
  templateUrl: './antualiza-component.component.html',
  styleUrl: './antualiza-component.component.css'
})
export class AntualizaComponentComponent {
  formNombre:string=""
  formApellido:string=""
  formCargo:string=""
  formSalario:number=0
  indiceEmpleado=0
  accion:number=-1
  constructor(private router: Router, private Miservice:ServicioEmpleadosService, private route:ActivatedRoute){
    this.indiceEmpleado=route.snapshot.params['indice'] 
this.accion=route.snapshot.queryParams['accion']
if(this.accion!= 1 && this.accion!= 0)this.router.navigate(['**']);

    let empleado = this.Miservice.empleados[this.indiceEmpleado]
    this.formNombre=empleado.nombre
    this.formApellido=empleado.apellido
    this.formCargo=empleado.cargo
    this.formSalario=empleado.salario

  }


  empleados:Empleado[]=[
  ];
  
  volverHome(){
    this.router.navigate(['']);
    //    window.location.reload()
    }

  actualizaEmpleado(){
    if(this.formNombre!=""){
      /* this.Miservice.muestraMensaje(`Nuevo empleado agregado ${this.formNombre}`); */
      let empleado= new Empleado(this.formNombre,this.formApellido,this.formCargo,this.formSalario)
      this.Miservice.editarEmpleadoServicio(empleado,this.indiceEmpleado)
      
  
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

    eliminaEmpleado(){
      this.Miservice.eliminaEmpleadoService(this.indiceEmpleado)
      this.volverHome()
    }

    accionEmpleado(){
      this.accion==1?this.actualizaEmpleado():this.eliminaEmpleado();
    }
  
}
