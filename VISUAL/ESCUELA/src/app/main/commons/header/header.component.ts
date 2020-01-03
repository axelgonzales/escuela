import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.styl']
})
export class HeaderComponent implements OnInit {

  @Output() toggle: EventEmitter<null> = new EventEmitter();
  @Output() logout: EventEmitter<null> = new EventEmitter();

  displaynavbar: boolean = false;
  data_user : any;

  constructor(private apiService:ApiService) { }

  ngOnInit() {
    this.data_user = ApiService.getDataUser();
  }

  changeStateSidebar():void {
    this.toggle.emit();
  }
  openProfileHeader():void {
    this.displaynavbar = !this.displaynavbar;
  }
  closeSession():void{
    this.logout.emit();
  }
}
