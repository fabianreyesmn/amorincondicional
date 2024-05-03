import { Component } from '@angular/core';
import { Animales } from '../../interfaces/animales';
import { AnimalesService } from '../../services/animales.service';
import { RegistroComponent } from '../registro/registro.component';

@Component({
  selector: 'app-nuestros-perros',
  standalone: true,
  imports: [RegistroComponent],
  templateUrl: './nuestros-perros.component.html',
  styleUrl: './nuestros-perros.component.css'
})
export class NuestrosPerrosComponent {
  array: Animales [] = [];
  seleccion: string = "";

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

  hacerCita(sel:string){
    this.seleccion = sel;
  }
}
