import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpErrorResponse} from '@angular/common/http';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {
  isLoginError = false;
  loading = false;
  username: FormControl;
  password: FormControl;
  formlogin: FormGroup;

  constructor(private router: Router,
    private apiService: ApiService) {
  }

  ngOnInit() {
    this.createFormControls();
    this.createForm();

  }

  createFormControls() {
    this.username = new FormControl('', [
      Validators.required
      // Validators.email
    ]);
    this.password = new FormControl('', [
      Validators.required
    ]);
  }

  createForm() {
    this.formlogin = new FormGroup({
      username: this.username,
      password: this.password
    });
  }
  onSubmit() {
    this.loading = true;
    console.log(this.formlogin.valid);
    if(this.formlogin.valid){
      console.log(this.formlogin.value);
      this.apiService.login(this.formlogin.value).subscribe((response) => {
          console.log(response);
          this.router.navigate(['/main']);
      });
      // (err: HttpErrorResponse) => {
      //   this.message = true;
      // });
    }
    // this.authService.authenticate(userName, password).subscribe((result: any) => {
    //     if (result) {
    //       // this.checkProfileAccess(result.codigo_unico, result, userName, password);
    //     } else {
    //       this.isLoginError = true;
    //       // this.message_error = result.message;
    //     }
    //     this.loading = false;
    //   },
    //   (err: HttpErrorResponse) => {
    //     this.isLoginError = true;
    //     // this.message_error = (err.error.error_description == 'User or password incorrect') ? 'El usuario o contraseña es incorrecta' : 'Ocurrió un error inesperado';
    //     this.loading = false;
    //   });
  }


}
