import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators, FormControl} from '@angular/forms';
import { ServicioSettings } from '../data/servicio-settings';
import { DataService } from '../data/data.service';

@Component({
  selector: 'app-ingresarservicio',
  templateUrl: './ingresarservicio.component.html',
  styleUrls: ['./ingresarservicio.component.css']
})
export class IngresarservicioComponent implements OnInit {

  hoy: Date = new Date();

  servicioSettings: ServicioSettings = {
    tecnico: null,
    servicioRealizado: null,        
    semanaDelAno: null,
    fechaDeInicio: null,
    horaDeInicio: null,
    fechaDeFinalizacion: null,
    horaDeFinalizacion: null,
    cantidadDeHoras: null,
    tipoDeHora: null
  };
  
  myForm: FormGroup;    
  submitted = false;  

  constructor(private formBuilder: FormBuilder, private dataService: DataService)  {    }
  //constructor(private dataService: DataService)  {    }
iniciarFormulario(){
  this.myForm = new FormGroup({
    //tecnico: new FormControl(this.servicioSettings.tecnico, [Validators.required, Validators.minLength(4), Validators.maxLength(30)]),
    tecnico: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(30)]),
    servicioRealizado: new FormControl(this.servicioSettings.servicioRealizado, [Validators.required, Validators.minLength(4), Validators.maxLength(30)]),
    fechaDeInicio: new FormControl(this.servicioSettings.fechaDeInicio, [Validators.required]),
    horaDeInicio: new FormControl(this.servicioSettings.horaDeInicio, [Validators.required, Validators.maxLength(2)]),
    fechaDeFinalizacion: new FormControl(this.servicioSettings.fechaDeFinalizacion, [Validators.required]),
    horaDeFinalizacion: new FormControl(this.servicioSettings.horaDeFinalizacion, [Validators.required, Validators.maxLength(2)])    
  });
}

public get tecnico(): FormGroup {
  return this.myForm.get('tecnico') as FormGroup;
}

  ngOnInit() {
    this.iniciarFormulario();    
  }

  get f() { return this.myForm.controls }

  onSubmit() {
    this.submitted = true;

    if (this.myForm.invalid) {
      alert ('Error')
      return      
    }
    this.dataService.postServicioSettingsForm(this.myForm.value).subscribe(
                 result => console.log('success ', result),
                 error => console.log('error ', error)
             );    
  }

  //  constructor(private formBuilder: FormBuilder, private dataService: DataService)  {          

  //     this.myForm = this.formBuilder.group({
  //       tecnico: [this.servicioSettings.tecnico, Validators.required],
  //       servicioRealizado: [this.servicioSettings.servicioRealizado, Validators.required],
  //       fechaDeInicio: [this.servicioSettings.fechaDeInicio, Validators.required],
  //       horaDeInicio: [this.servicioSettings.horaDeInicio, Validators.required],
  //       fechaDeFinalizacion: [this.servicioSettings.fechaDeFinalizacion, Validators.required],
  //       horaDeFinalizacion: [this.servicioSettings.horaDeFinalizacion, Validators.required]
  //     });
     
  //  }

  // ngOnInit(): void {
  // }

  // onSubmit() {
  //   if (this.myForm.valid) {
  //       console.log(this.myForm.value)
  //       this.dataService.postServicioSettingsForm(this.myForm.value).subscribe(
  //           result => console.log('success ', result),
  //           error => console.log('error ', error)
  //       );
  //   }
  // }


}
