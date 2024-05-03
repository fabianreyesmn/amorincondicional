import { Component, Input } from '@angular/core';
import { Animales } from '../../interfaces/animales';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CalendarModule, FormsModule, ButtonModule, CommonModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  @Input() array: Animales[];
  @Input() seleccion: string;
  date: Date;
  value!: Number;
  cita = {
    'width': '80%',
    'border': '1px solid black',
    'border-radius': '15px',
    'margin': '20px auto',
    'padding': '30px',
  };

  constructor(){
    this.array = [];
    this.seleccion = "";
    this.date = new Date();
  }
}
