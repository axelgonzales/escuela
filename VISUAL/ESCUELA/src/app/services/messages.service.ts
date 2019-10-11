import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  private subject = new Subject<any>();

  constructor() {
    this.subject.next({ type: 'success', text: "hola" });
  }

  success(message: string) {
    this.subject.next({ type: 'success', text: message });
  }

  error(message: string) {
    this.subject.next({ type: 'danger', text: message });
  }

  warning(message: string) {
    this.subject.next({ type: 'warning', text: message });
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }

}
