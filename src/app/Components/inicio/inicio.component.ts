import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CollageComponent } from '../collage/collage.component';
import { PatrocinadorComponent } from '../patrocinador/patrocinador.component';
import { SuscribeComponent } from '../suscribe/suscribe.component';
import { ColorcitoComponent } from '../colorcito/colorcito.component';
import { InfoComponent } from '../info/info.component';
//import { HistoriaComponent } from './components/historia/historia.component';
import { HistoriaComponent } from '../historia/historia.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [RouterOutlet, CollageComponent, PatrocinadorComponent, SuscribeComponent, ColorcitoComponent, InfoComponent, HistoriaComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}
