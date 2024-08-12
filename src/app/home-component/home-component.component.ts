import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrl: './home-component.component.css'
})
export class HomeComponentComponent implements OnInit{
  title = 'my-app';
  saludo = 'Viva Mèxico';
constructor(){

}

ngOnInit(): void {

}

}
