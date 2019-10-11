import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  registroVisible:boolean = false;
  validateForm: FormGroup;
  loginForm : FormGroup;
  message: boolean = false;
  constructor(private fb: FormBuilder,
              private router: Router,
              private apiService: ApiService) 
  {}
  cambiarVisibleRegistro(){
    console.log(this.registroVisible);
    this.registroVisible = true;
  }
 submitForm(): void {
   console.log(this.loginForm.valid);
   for (const i in this.loginForm.controls) {
    this.loginForm.controls[i].markAsDirty();
    this.loginForm.controls[i].updateValueAndValidity();
    }
    if(this.loginForm.valid){
      console.log(this.loginForm.value);
      this.apiService.login(this.loginForm.value).subscribe((response) => {
          console.log(response);
          this.router.navigate(['/main']);
      },
      (err: HttpErrorResponse) => {
        this.message = true;
      });
    }
  } 

  submitUserForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    console.log(this.validateForm.valid);
    if(this.validateForm.valid){
      console.log(this.validateForm.value);
      this.apiService.insert(this.validateForm.value).subscribe((response) => {
        this.registroVisible = false;
          console.log(response);
      },
      (err: HttpErrorResponse) => {
      
      });
    }
  }

  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.validateForm.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  };
  
  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: [null, [Validators.email, Validators.required]],
      password: [null, [Validators.required]],
      checkPassword: [null, [Validators.required, this.confirmationValidator]],
      username: [null, [Validators.required]]
    });
    this.loginForm = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]]
    });
  }

}
