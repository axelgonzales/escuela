import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { CreateStudentComponent } from '../../create-student/create-student.component';
@Component({
  selector: 'app-search-student',
  templateUrl: './search-student.component.html',
  styleUrls: ['./search-student.component.css']
})
export class SearchStudentComponent implements OnInit {
  isVisible = false;
  public modalRef: BsModalRef;
  constructor(private apiService: ApiService,public modalService: BsModalService) { }

  ngOnInit() {
  }

  showModal(): void {
    this.modalRef = this.modalService.show(CreateStudentComponent, { animated: true, keyboard: true, backdrop: true, ignoreBackdropClick: false,class: 'modal-width-lg' });
    this.isVisible = true;
  }

  handleCancel(): void {
    this.isVisible = false;
  }
 
}
