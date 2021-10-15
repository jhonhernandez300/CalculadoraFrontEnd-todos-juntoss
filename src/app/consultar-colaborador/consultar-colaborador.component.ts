import { Component, OnInit } from '@angular/core';
import { DataService } from '../data/data.service';
import { IFrequency } from '../data/ifrequency';
import { Colaborador } from '../data/colaborador';
import { FormBuilder, FormGroup, NgForm, Validators, FormControl} from '@angular/forms';
import { ServicioSettings } from '../data/servicio-settings';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-consultar-colaborador',
  templateUrl: './consultar-colaborador.component.html',
  styleUrls: ['./consultar-colaborador.component.css']
})
export class ConsultarColaboradorComponent implements OnInit {

  colaborador: Colaborador = {
    numeroDeIndentificacion: null,
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

  items: Colaborador;
  myForm: FormGroup;    
  submitted = false;  

  constructor(private dataService: DataService) { }

  iniciarFormulario(){
    this.myForm = new FormGroup({        
      numeroDeIndentificacion: new FormControl(this.colaborador.numeroDeIndentificacion, [Validators.required, Validators.minLength(4), Validators.maxLength(30)])      
    });
}

  ngOnInit() {
    this.iniciarFormulario();  
  }

  onSubmit() {
    this.submitted = true;

    if (this.myForm.invalid) {
      alert ('Error')
      return      
    }
    
    //console.log(this.myForm.value.numeroDeIndentificacion);
    this.dataService.ConsultarColaboradorPorIdentificación(this.myForm.value.numeroDeIndentificacion).subscribe(
      //result => console.log('success ', result),
      result =>  this.items = result,
      error => console.log('error ', error)
    );     
  }

}
