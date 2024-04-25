import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NuestrosPerrosComponent } from './nuestros-perros/nuestros-perros.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NuestrosPerrosComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'amorincondicional';
}
