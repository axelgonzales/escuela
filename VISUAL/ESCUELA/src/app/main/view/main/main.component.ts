import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  isVisible = false;
  isConfirmLoading = false;
  listOfData = [];
  student : any;
  dni:any;
  constructor(private router: Router,private apiService: ApiService) {
  }

  searchDniStudent(dni){
 
    console.log(dni);
    if(dni == null || dni ==undefined || dni == ''){
      this.getListStudent();
    }
    else{
      this.listOfData = this.listOfData.filter(obj =>obj.dni == dni );
    }
  }
  getStudentId(data:any){
    this.apiService.getFindIdStudent(data.id).subscribe((response) => {
      // this.registroVisible = false;
      this.student = response;
        console.log(response);
        this.isVisible = true;
    });
  }
  
  getListStudent(){
    this.apiService.getAllStudent().subscribe((response) => {
      // this.registroVisible = false;
      this.listOfData = response;
        console.log(response);
    });
  }

  ngOnInit(): void {
    this.apiService.getAllStudent().subscribe((response) => {
      // this.registroVisible = false;
      this.listOfData = response;
        console.log(response);
    });
  }

  logout(): void{
    this.router.navigate(['/login']);
  }
  

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.isConfirmLoading = true;
    setTimeout(() => {
      this.isVisible = false;
      this.isConfirmLoading = false;
    }, 3000);
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  setSeleccionado(evemt){
    this.isVisible = false;
    this.getListStudent();
  }
}
