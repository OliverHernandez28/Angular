import { Component, Input, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { Empleado } from './empleado.model';
import { ServicioEmpleadosService } from '../servicio-empleados.service';
import { EmpleadosServiceService } from '../empleados-service.service';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
  styleUrl: './directiva.component.css',
})
export class DirectivaComponent implements OnInit {
  titulo = 'Registro de Usuarios';
  mensaje = '';
  registrado = false;
  usuario = { nombre: '', apellido: '', cargo: '' };

  entradas: any = [];
  constructor(private Miservice: ServicioEmpleadosService,private dataService: DataService, private router:Router) {
    this.entradas = [
      { titulo: 'JS cada dia mejor' },
      { titulo: 'Python cada dia mejor' },
      { titulo: 'Java cada dia mas viejo' },
      { titulo: 'Go cada dia mejor' },
      { titulo: 'Laravel cada dia mejor' },
    ];
  }

  tituloPractica = 'Listado de empleados';
  empleados: Empleado[] = [];

  formNombre: string = '';
  formApellido: string = '';
  formCargo: string = '';
  formSalario: number = 0;

  ngOnInit(): void {
    this.dataService.recuperaEmpleados().subscribe({
      next: (v) => {
        console.log('Empleados: ', v);
        // Si necesitas procesar y almacenar los empleados:
        this.empleados = Object.values(v);
        this.Miservice.setEmpleados(this.empleados);
      },
      error: (e) => {
        console.log('Error: '+e.status+' '+e.statusText)
        /* this.router.navigate(['/login']) */
        // Puedes manejar el error aquí, por ejemplo, mostrando un mensaje al usuario.
      },
    });
  }
  

  agregarEmpleado() {
    if (this.formNombre != '') {
      let empleado = new Empleado(
        this.formNombre,
        this.formApellido,
        this.formCargo,
        this.formSalario
      );
      this.Miservice.agregarEmpleadoServicio(empleado);

      this.formNombre = '';
      this.formApellido = '';
      this.formCargo = '';
      this.formSalario = 0;
    } else {
      alert('Campos incorrecto 🥸');
    }
  }

  addItem(newItem: string) {
    let empleado = new Empleado(newItem, newItem, newItem, 1750);
    this.empleados.push(empleado);
  }
}
