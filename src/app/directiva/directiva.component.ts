import { Component } from '@angular/core';
import { Form } from '@angular/forms';
import { Empleado } from './empleado.model';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
  styleUrl: './directiva.component.css'
})
export class DirectivaComponent {

  titulo="Registro de Usuarios"
mensaje=""
registrado=false;
usuario={nombre:"",apellido:""}

entradas:any=[];
constructor(){
  this.entradas=[
    {titulo:"JS cada dia mejor"},
    {titulo:"Python cada dia mejor"},
    {titulo:"Java cada dia mas viejo"},
    {titulo:"Go cada dia mejor"},
    {titulo:"Laravel cada dia mejor"}
  ]
}

tituloPractica="Listado de empleados"
empleados:Empleado[]=[
  new Empleado("Oliver","Hernandez","Estudiante",1000),
  new Empleado("Alexis","Hernandes","Director",10000),
  new Empleado("Pedro","Hernandes","Estudiante",100),
  new Empleado("Juan","Hernandes","Intendente",2000),
];

formNombre:string=""
formApellido:string=""
formCargo:string=""
formSalario:number=0

agregarEmpleado(){
  if(this.formNombre!=""){
  let empleado= new Empleado(this.formNombre,this.formApellido,this.formCargo,this.formSalario)
  this.empleados.push(empleado)
  this.formNombre=""
  this.formApellido=""
  this.formCargo=""
  this.formSalario=0
}
else {
  alert("Campos incorrecto 🥸")
}
  }

}
