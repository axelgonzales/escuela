import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { MainComponent } from './main/view/main/main.component';
import { DataComponent } from './data/data.component';
import { CreateStudentComponent } from './main/view/create-student/create-student.component';

const routes: Routes = [
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {path : 'login' , component : LoginComponent },
  {path : 'main' , component : MainComponent },
  {path : 'create-student' , component : CreateStudentComponent },
  {path : 'data' , component : DataComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
