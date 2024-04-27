import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterOutlet, RouterModule, IconFieldModule, InputIconModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

}
