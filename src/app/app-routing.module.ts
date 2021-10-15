import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IngresarservicioComponent } from './ingresarservicio/ingresarservicio.component';
import { VerhorasComponent } from './verhoras/verhoras.component';
import { SeeOrdersSalesComponent } from './see-orders-sales/see-orders-sales.component';
import { SeePercentageComponent } from './see-percentage/see-percentage.component';
import { SeeFrequencyComponent } from './see-frequency/see-frequency.component';
import { RegistrarColaboradorComponent } from './registrar-colaborador/registrar-colaborador.component';
import { ConsultarColaboradorComponent } from './consultar-colaborador/consultar-colaborador.component';
import { PracticeComponent } from './practice/practice.component';

const routes: Routes = [
  { path: 'consultarColaborador', component: ConsultarColaboradorComponent },
  { path: 'registrarColaborador', component: RegistrarColaboradorComponent },
  { path: 'seeSalesOrders', component: SeeOrdersSalesComponent },
  { path: 'seePercentage', component: SeePercentageComponent },
  { path: 'seeFrequency', component: SeeFrequencyComponent },
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
