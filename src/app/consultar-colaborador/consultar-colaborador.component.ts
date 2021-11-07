import { Component, OnInit } from '@angular/core';
import { DataService } from '../data/data.service';
import { IFrequency } from '../data/ifrequency';
import { Colaborador } from '../data/colaborador';
import { FormBuilder, FormGroup, NgForm, Validators, FormControl} from '@angular/forms';
import { ServicioSettings } from '../data/servicio-settings';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-consultar-colaborador',
  templateUrl: './consultar-colaborador.component.html',
  styleUrls: ['./consultar-colaborador.component.css']
})
export class ConsultarColaboradorComponent implements OnInit {

  colaborador: Colaborador = {
    numeroDeIndentificacion: 33,
    nombres: null,
    apellidos: null,
    direccion: null,
    email: null,
    telefono: null,
    salario: null,
    fk_Area: null,
    fechaDeIngreso: null,
    sexo: null,
    codigoInterno: null
  };

  items: Colaborador[];
  myForm: FormGroup;    
  submitted = false;  

  constructor(private dataService: DataService, private http: HttpClient) { }

  iniciarFormulario(){
    this.myForm = new FormGroup({        
      numeroDeIndentificacion: new FormControl(this.colaborador.numeroDeIndentificacion, [Validators.required, Validators.minLength(1), Validators.maxLength(16)])      
    });
}

  ngOnInit() {
    this.iniciarFormulario();     
  }

  consultarColaborador(numeroDeIndentificacion: Number): void {
    this.dataService.ConsultarColaboradorPorIdentificacion(numeroDeIndentificacion).subscribe(
        result =>  this.items = result,
        error => console.log('error ', error)
      ); 
  }

  onSubmit() {
    this.submitted = true;

    if (this.myForm.invalid) {
      alert ('Error')
      return      
    }
    
    //console.log(this.myForm.value.numeroDeIndentificacion);
    this.consultarColaborador(this.myForm.value.numeroDeIndentificacion);
    // this.dataService.ConsultarColaboradorPorIdentificacion(this.myForm.value.numeroDeIndentificacion).subscribe(
    // //this.dataService.ConsultarColaboradorPorIdentificacion(1).subscribe(
    //   //result => console.log('success ', result),
    //   result =>  this.items = result,
    //   error => console.log('error ', error)
    // );     
  }

}
