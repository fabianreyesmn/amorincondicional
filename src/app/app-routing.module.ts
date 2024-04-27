import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { InicioComponent } from './Components/inicio/inicio.component';
// import { AboutUsComponent } from './Components/about-us/about-us.component';
// import { AyudaComponent } from './Components/ayuda/ayuda.component';
import { ContactoComponent } from './Components/contacto/contacto.component';
import { NuestrosPerrosComponent } from './Components/nuestros-perros/nuestros-perros.component';

const routes: Routes = [
  { path: '', redirectTo: '/contacto', pathMatch: 'full' },
  // { path: 'home', component:  InicioComponent}, 
  // { path: 'about', component: AboutUsComponent},
  // { path: 'ayuda', component:  AyudaComponent}, 
  { path: 'mascotas', component: NuestrosPerrosComponent}, 
  { path: 'contacto', component: ContactoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
