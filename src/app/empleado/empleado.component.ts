import { Component, Input, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';


@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  //template: "<p>Aqui va un empleado</p>",
  styleUrl: './empleado.component.css'
  //styles: ["p{background-color:red}"]
})
export class EmpleadoComponent implements OnInit {

  @Input() genero: string = "";
  nombre = "Oliver"
  apellido = "Hernandez"
  //private edad = 22
  edad: any = 22
  empresa = "Google"
  /*   getEdad() {
      return this.edad;
    }
   */

  habilitacionInput = false
  usuRegistrado = false
  textoDeRegistro = "No hay nadie registrado";

  getRegistroUsuario() {
    this.usuRegistrado = true
  }


  setUsuarioRegistrado(event: any) {
    //alert("El usuario se acaba de registrar")
    event.target.value == 'si' ? this.textoDeRegistro = "El usuario se acaba de registrar" : this.textoDeRegistro = "No hay nadie registrado";
  }

  constructor() { }
  ngOnInit(): void { }

}
