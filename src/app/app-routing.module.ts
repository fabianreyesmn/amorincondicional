import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { InicioComponent } from './Components/inicio/inicio.component';
// import { AboutUsComponent } from './Components/about-us/about-us.component';
// import { AyudaComponent } from './Components/ayuda/ayuda.component';
import { ContactoComponent } from './Components/contacto/contacto.component';
import { NuestrosPerrosComponent } from './Components/nuestros-perros/nuestros-perros.component';
import { BusquedaComponent } from './Components/busqueda/busqueda.component';

const routes: Routes = [
  { path: '', redirectTo: '/mascotas', pathMatch: 'full' },
  // { path: 'home', component:  InicioComponent}, 
  // { path: 'about', component: AboutUsComponent},
  // { path: 'ayuda', component:  AyudaComponent}, 
  { path: 'mascotas', component: NuestrosPerrosComponent},
  { path: 'contacto', component: ContactoComponent },
  { path: 'busqueda', component: BusquedaComponent },
  { path: '**', redirectTo: '/mascotas' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
