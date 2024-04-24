import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RecursosEducativosComponent } from './recursos-educativos/recursos-educativos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RecursosEducativosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'amorincondicional';
}
