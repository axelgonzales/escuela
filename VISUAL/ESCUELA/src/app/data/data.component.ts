import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getAllStudent().subscribe((response) => {
      // this.registroVisible = false;
        console.log(response);
    });
  }
  listOfData = [
    {
      key: '1',
      name:'Lucia Rosas Morales',
      age:'29',
      dpto: 'Lima',
      prov: 'Lima',
      dist: 'San Juan de Lurigancho',
      urb:'Los portales',
      direc:'las flores, M8LT6',
      colegio:'Univerdidad Mayor de San Marcos',
      lugar:'av.venezuela',
      nivel:'septimo',
      titulo:'Contabilidad',
      fecha:'2018',
      pais:'Argentina',
      motivo:'turismo',
      tipo:'contabilidad',
      entidad:'Claro',
      ingresos:'1500',
      telefono:'989754529',
      
    

    }
  ];
  checkOptionsOne = [
    { label: 'si', value: 'no' },
    { label: 'no', value: 'si' },
  ];
  checkOptionsTwo = [
    { label: 'si', value: 'no' },
    { label: 'no', value: 'si' },
  ];
  checkOptionsThree = [
    { label: 'si', value: 'no', checked: true },
    { label: 'no', value: 'si' },
  ];
  checkOptionsFour = [
    { label: 'si', value: 'no' },
    { label: 'no', value: 'si', checked: true },
  ];
  checkOptionsFive = [
    { label: 'si', value: 'no' },
    { label: 'no', value: 'si', checked: true },
  ];
}
