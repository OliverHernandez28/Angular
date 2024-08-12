import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ProyectosComponentComponent } from './proyectos-component/proyectos-component.component';
import { QuienesComponentComponent } from './quienes-component/quienes-component.component';
import { ContactoComponentComponent } from './contacto-component/contacto-component.component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
import { AntualizaComponentComponent } from './antualiza-component/antualiza-component.component';
import { LoginComponent } from './login/login.component';
import { LoginGuardian } from './login/login-guardian';

const routes: Routes = [



  {path:'',component:HomeComponentComponent,children:[ 
    {path:'proyectos',component:ProyectosComponentComponent},
  {path:'contacto',component:ContactoComponentComponent},
  {path:'quienes',component:QuienesComponentComponent},
  {path:'actualiza/:indice',component:AntualizaComponentComponent},],canActivate:[LoginGuardian]},
 
  {path:'login',component:LoginComponent},
  {path:'**',component:NotFoundComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
