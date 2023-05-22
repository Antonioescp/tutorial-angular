import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioCiudadComponent } from '../formulario-ciudad/formulario-ciudad.component';
import { InicioComponent } from '../inicio/inicio.component';
import { ListaCiudadesComponent } from '../lista-ciudades/lista-ciudades.component';

const routes: Routes = [
  { path: 'ciudad/:id', component: FormularioCiudadComponent },
  { path: 'ciudad', component: FormularioCiudadComponent },
  { path: 'ciudades', component: ListaCiudadesComponent },
  { path: '', component: InicioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
