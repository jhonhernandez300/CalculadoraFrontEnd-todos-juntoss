import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../data/user';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-insert-relative',
  templateUrl: './insert-relative.component.html',
  styleUrls: ['./insert-relative.component.css']
})
export class InsertRelativeComponent implements OnInit {
 
  myForm!: FormGroup;    
  submitted = false; 
  userId: number = 0;

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute) { } 
    iniciarFormulario(){
      this.myForm = this.formBuilder.group({              
         userDocumentNumber: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(30)]],
        userNames: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
        inLaw: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(15)]],
        userLastNames: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
        userGender: ['', [Validators.required]],              
        dateOfBirth: ['', [Validators.required]]      
      });
  }

  ngOnInit(): void {
    this.userId = this.route.snapshot.params['id'];
    this.iniciarFormulario();

  }

  get f(): { [key: string]: AbstractControl } {
    return this.myForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.myForm.invalid) {
      return;
    }
    console.log(JSON.stringify(this.myForm.value, null, 2));
  }

  onReset(): void {
    this.submitted = false;
    this.myForm.reset();
  }

}
