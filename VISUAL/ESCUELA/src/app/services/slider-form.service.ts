import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {  DocumentItem } from '../models/documentItem';

@Injectable({
  providedIn: 'root'
})
export class SliderFormService {

  private form = new BehaviorSubject<string>('');
  private show = new BehaviorSubject<boolean>(false);
  private actionBehavior = new BehaviorSubject<boolean>(false);
  private refreshComponentBehavior = new BehaviorSubject<boolean>(false);
  private documentBehavior = new BehaviorSubject<DocumentItem>(null)
  private showModalDelBehavior = new BehaviorSubject<boolean>(false);

  cast = this.form.asObservable();
  flagShow = this.show.asObservable();
  getAction = this.actionBehavior.asObservable();
  getDocument = this.documentBehavior.asObservable();
  refreshComponent = this.refreshComponentBehavior.asObservable();
  showModalDel = this.showModalDelBehavior.asObservable()

  constructor() { }

  setForm(form): void {
    // this.budgetBehavior.next(params);
    this.form.next(form);
    let newShow = (form=='')?false:true;
    setTimeout(() => {
      this.show.next(newShow);
    }, 10);
  }



  setDocument(document: DocumentItem){
    this.documentBehavior.next(document)
  }

  setAction(action){
    this.actionBehavior.next(action)
  }

  setRefreshComponent(status:boolean){
    this.refreshComponentBehavior.next(status)
  }

  setShowModalDel(showModal:boolean){
    this.showModalDelBehavior.next(showModal)
  }


}
