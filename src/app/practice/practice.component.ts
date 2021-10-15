import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {
  controlsFormGroup: FormGroup;
  radioExample: FormControl = new FormControl();
  departmentsSelect: FormControl = new FormControl();
  state:any = [
    {
      id: 1,
      name: "Antioquia"
    },
    {
      id: 2,
      name: "Valle"
    }
  ];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {    
    this.controlsFormGroup = this.fb.group({
      radioExample: this.radioExample,
      departmentsSelect: this.departmentsSelect
    })
  }

  save(): void{
    let radioValue = this.controlsFormGroup.get('radioExample').value; 
    console.log(this.controlsFormGroup.get('radioExample').value);   
    console.log(this.controlsFormGroup.get('departmentsSelect').value);   
  }

}
