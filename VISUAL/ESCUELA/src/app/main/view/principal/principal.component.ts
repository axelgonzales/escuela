import {Component, OnInit, ViewChild, TemplateRef, EventEmitter, Output} from '@angular/core';
import {AuthService} from '../../../services/auth.service';
import {ApiService} from '../../../services/api.service';
import {MessagesService} from '../../../services/messages.service';
import {HttpErrorResponse} from '@angular/common/http';
import {ResponseItem, ResponseMenuChild} from '../../../models/responseMenu';
// import {Idle, DEFAULT_INTERRUPTSOURCES} from '@ng-idle/core';
// import {Keepalive} from '@ng-idle/keepalive';
import {environment} from '../../../../environments/environment';
// import {NgbModal, NgbModalOptions, ModalDismissReasons, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {


  showStyle: boolean = false;
  menu = [];
  data_user: any;

  @ViewChild('modalSesion')
  private modal: TemplateRef<any>;



  closeResult: string;
  lastPing?: Date = null;
  force_logout = false;
  modal_open = false;

  constructor(private authService: AuthService, private apiService: ApiService, private messagesService: MessagesService) {


  }

  ngOnInit() {
    this.data_user = ApiService.getDataUser();
        const response = {
          "options": {
            "menu": [
              {
                "codeProfile": "105",
                "nameProfile": "Visitantes - Admin",
                "label": "Mantenimiento",
                "icon": "description",
                "child": [
                  {
                    "label": "Alumnos",
                    "route": "/main",
                    "flatModal": "0"
                  }
                ]
              },
              // {
              //   "codeProfile": "105",
              //   "nameProfile": "Visitantes - Admin",
              //   "label": "Cerrar sesión",
              //   "icon": "input",
              // }
            ]
          }
        };
        this.menu = response.options.menu;
  }

  toggleSideBar() {
    this.showStyle = !this.showStyle;
  }

  logout() {
    this.authService.logout();
  }

 

  open() {
    this.modal_open = false;
    this.force_logout = true;
    this.forceLogout();
  }

  forceLogout() {
    this.authService.logoutRedirect();
  }


}
