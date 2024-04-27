import { Component } from '@angular/core';
import { Animales } from '../../interfaces/animales';
import { AnimalesService } from '../../services/animales.service';

@Component({
  selector: 'app-nuestros-perros',
  standalone: true,
  imports: [],
  templateUrl: './nuestros-perros.component.html',
  styleUrl: './nuestros-perros.component.css'
})
export class NuestrosPerrosComponent {
  array: Animales [] = [];

  constructor(public animalesService: AnimalesService){

  }

  ngOnInit(){
    console.log("Componente cargado");
    this.recuperarDatos();
  }

  recuperarDatos():void{
    console.log("entre")

    this.animalesService.retornar().subscribe({
      next: this.successRequest.bind(this),
      error: (err) => {console.log(err)}
    });
  }

  successRequest(data:any):void{
    console.log("data", data);
    this.array = data.animales;
    console.log("array", this.array);
  }
}
