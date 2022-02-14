import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../data/user';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { UserService } from '../data/user-service';


@Component({
  selector: 'app-insert-user',
  templateUrl: './insert-user.component.html',
  styleUrls: ['./insert-user.component.css']
})
export class InsertUserComponent implements OnInit {
  
  myForm!: FormGroup;    
  submitted = false;   

  constructor(private formBuilder: FormBuilder, private userService: UserService) { }
  
  iniciarFormulario(){
    this.myForm = this.formBuilder.group({              
       userDocumentNumber: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(30)]],
      userNames: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      userLastNames: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      userPlatformName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      userPassword: ['', [Validators.minLength(3), Validators.maxLength(15)]],
      userGender: ['', [Validators.required]],              
      dateOfBirth: ['', [Validators.required]]      
    });
}

  ngOnInit(): void {
    this.iniciarFormulario();       
  }

  get f(): { [key: string]: AbstractControl } {
    return this.myForm.controls;
  }  
  onReset(): void {
    this.submitted = false;
    this.myForm.reset();
  }

  onSubmit() {    
    this.submitted = true;

    if (this.myForm.invalid) {
      console.log('Error')          
      return
    }     
    
    this.userService.SaveUser(this.myForm.value).subscribe(              
                 result => console.log('success ', result),                 
                 error => console.log('error ', error)                 
             );    
             
  }  

}
