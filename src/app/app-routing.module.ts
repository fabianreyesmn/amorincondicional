import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Importen el componente de su pagina y agreguenlo a las rutas.
import { ContactoComponent } from './Components/contacto/contacto.component';

const routes: Routes = [
  { path: '', redirectTo: '/contacto', pathMatch: 'full' },
  // { path: 'home', component: <Nombre del componente> }, Pagina de Inicio
  // { path: 'about', component: <Nombre del componente> }, Pagina de acerca de
  // { path: 'ayuda', component: <Nombre del componente> }, Pagina de como ayudar
  // { path: 'mascotas', component: <Nombre del componente> }, Pagina de perros y gatos
  { path: 'contacto', component: ContactoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
