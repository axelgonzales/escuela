import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  isConfirmLoading = false;
  isVisible = false;
  listOfData = [];
  link :string = '';
  student : any;
  dni:any;
  isVisibleReporte = false;
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
  
  
  generateRerport(data:any){
    this.apiService.getGerenateReportStudent(data.studentId).subscribe((response) => {
      // this.registroVisible = false;
      // this.student = response;
        // this.isVisibleReporte = true;
        
        // this.link = 'C:/Users/Axel/Downloads/escuela/employee.pdf'
        // console.log("link " + this.link);
        console.log(response);
        let file = new Blob([response], { type: 'application/pdf' });            
        var fileURL = URL.createObjectURL(file);
        window.open(fileURL);
    });
  }
  handleCancelReporte(){
    this.isVisibleReporte = false;
  }

  getStudentId(data){
    this.apiService.getFindIdStudent(data.studentId).subscribe((response) => {
      // this.registroVisible = false;
      this.student = response;
      this.isVisible = true;
        
    });
  }
  deleteStudentId(data){
    this.apiService.deleteIdStudent(data.studentId).subscribe((response) => {
      // this.registroVisible = false;
      this.student = response;
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


  showModal(): void {
    this.isVisible = true;
  }


}
