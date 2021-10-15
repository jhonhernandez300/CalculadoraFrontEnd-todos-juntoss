import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { IngresarservicioComponent } from './ingresarservicio/ingresarservicio.component';
import { VerhorasComponent } from './verhoras/verhoras.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { SeeFrequencyComponent } from './see-frequency/see-frequency.component';
import { SeePercentageComponent } from './see-percentage/see-percentage.component';
import { SeeOrdersSalesComponent } from './see-orders-sales/see-orders-sales.component';
import { RegistrarColaboradorComponent } from './registrar-colaborador/registrar-colaborador.component';
import { ConsultarColaboradorComponent } from './consultar-colaborador/consultar-colaborador.component';
import { PracticeComponent } from './practice/practice.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    IngresarservicioComponent,
    VerhorasComponent,    
    SeeFrequencyComponent,
    SeePercentageComponent,
    SeeOrdersSalesComponent,    
    RegistrarColaboradorComponent, ConsultarColaboradorComponent, PracticeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
