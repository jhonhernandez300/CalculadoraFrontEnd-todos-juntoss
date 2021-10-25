import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IngresarservicioComponent } from './ingresarservicio/ingresarservicio.component';
import { VerhorasComponent } from './verhoras/verhoras.component';
import { RegistrarColaboradorComponent } from './registrar-colaborador/registrar-colaborador.component';
import { ConsultarColaboradorComponent } from './consultar-colaborador/consultar-colaborador.component';
import { PracticeComponent } from './practice/practice.component';

const routes: Routes = [
  { path: 'consultarColaborador', component: ConsultarColaboradorComponent },
  { path: 'registrarColaborador', component: RegistrarColaboradorComponent },
  { path: 'ingresarservicio', component: IngresarservicioComponent },
  { path: 'verhoras', component: VerhorasComponent },
  { path: 'practice', component: PracticeComponent },
  { path: '', component: RegistrarColaboradorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
