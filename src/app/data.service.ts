import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Empleado } from './directiva/empleado.model';
import { error } from 'console';
import { LoginService } from './login/Login.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpCliente:HttpClient,private loginService:LoginService) { }


  guardarEmpleados(empleados:Empleado[]){
this.httpCliente.put('https://mis-clientes-68b89-default-rtdb.firebaseio.com/datos.json',empleados).subscribe({
  next: (v) => console.log('Se han guardado los empleados ' + v),
  error: (e) => console.log('Error' + e),
});
  }

  recuperaEmpleados(){
    const token = this.loginService.getIdToken()
   return this.httpCliente.get('https://mis-clientes-68b89-default-rtdb.firebaseio.com/datos.json?auth='+token)

  }

actualizaEmpleados(indice:number,Object:Empleado){
  let url = 'https://mis-clientes-68b89-default-rtdb.firebaseio.com/datos/'+indice+'.json';
  this.httpCliente.put(url,Object).subscribe({
    next: (v) => {console.log('Se han guardado los empleados ' + v); window.location.reload(); },
    error: (e) => console.log('Error' + e),
  });
    
}


eliminaEmpleados(indice:number){
  let url = 'https://mis-clientes-68b89-default-rtdb.firebaseio.com/datos/'+indice+'.json';
  this.httpCliente.delete(url).subscribe({
    next: (v) => {console.log('Se han guardado los empleados ' + v); window.location.reload(); },
    error: (e) => console.log('Error' + e),
  });
    
}


}
