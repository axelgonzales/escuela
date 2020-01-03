import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import ubigeoinei  from '../../commons/ubigeo-inei.json';
import { HttpErrorResponse } from '@angular/common/http';
import { ApiService } from 'src/app/services/api.service.js';
import { NzMessageService } from 'ng-zorro-antd';
import { Student } from 'src/app/models/student.js';
@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {
  studentObject : Student;
  personalInformationForm: FormGroup;
  educaForm : FormGroup;
  viajeForm : FormGroup;
  empleoForm : FormGroup;
  datoFamiliarForm : FormGroup;
  current = 0;
  value : boolean = true;
  list:any = [];
  listOfDataEmpleo = [];
  listOfDataFamilia = [];
  listOfData = [];
  listOfDataViaje = [];
  nationalityList = ['PERU','CHILE','VENEZOLANO'];
  stateCivilList = [{"value":"01", "name":"SOLTERO"},{"value":"02", "name":"CASADO"},{"value":"03", "name":"DIVORCIADO"},{"value":"04", "name":"VIUDO"}];
  distrityList = [];
  deparmentList =[];
  listOfDataEduca = [];
  provinceList = [{"id_ubigeo":"2557","nombre_ubigeo":"Bagua","codigo_ubigeo":"02","etiqueta_ubigeo":"Bagua, Amazonas","buscador_ubigeo":"bagua amazonas","numero_hijos_ubigeo":"5","nivel_ubigeo":"2","id_padre_ubigeo":"2534"},{"id_ubigeo":"2563","nombre_ubigeo":"Bongara","codigo_ubigeo":"03","etiqueta_ubigeo":"Bongara, Amazonas","buscador_ubigeo":"bongara amazonas","numero_hijos_ubigeo":"12","nivel_ubigeo":"2","id_padre_ubigeo":"2534"},{"id_ubigeo":"2535","nombre_ubigeo":"Chachapoyas","codigo_ubigeo":"01","etiqueta_ubigeo":"Chachapoyas, Amazonas","buscador_ubigeo":"chachapoyas amazonas","numero_hijos_ubigeo":"21","nivel_ubigeo":"2","id_padre_ubigeo":"2534"},{"id_ubigeo":"2576","nombre_ubigeo":"Condorcanqui","codigo_ubigeo":"04","etiqueta_ubigeo":"Condorcanqui, Amazonas","buscador_ubigeo":"condorcanqui amazonas","numero_hijos_ubigeo":"3","nivel_ubigeo":"2","id_padre_ubigeo":"2534"},{"id_ubigeo":"2580","nombre_ubigeo":"Luya","codigo_ubigeo":"05","etiqueta_ubigeo":"Luya, Amazonas","buscador_ubigeo":"luya amazonas","numero_hijos_ubigeo":"23","nivel_ubigeo":"2","id_padre_ubigeo":"2534"},{"id_ubigeo":"2604","nombre_ubigeo":"Rodriguez de Mendoza","codigo_ubigeo":"06","etiqueta_ubigeo":"Rodriguez de Mendoza, Amazonas","buscador_ubigeo":"rodriguez de mendoza amazonas","numero_hijos_ubigeo":"12","nivel_ubigeo":"2","id_padre_ubigeo":"2534"},{"id_ubigeo":"2617","nombre_ubigeo":"Utcubamba","codigo_ubigeo":"07","etiqueta_ubigeo":"Utcubamba, Amazonas","buscador_ubigeo":"utcubamba amazonas","numero_hijos_ubigeo":"7","nivel_ubigeo":"2","id_padre_ubigeo":"2534"}];  index = 'First-content';
  @Input() student: any;
  @Output() usuarioSeleccionado = new EventEmitter();


  constructor(private message: NzMessageService,private fb: FormBuilder,private apiService: ApiService) {
    this.list = ubigeoinei;
  }

  ngOnInit() {
    this.deparmentList = this.list.filter(obj =>obj.provincia == '00' &&  obj.distrito == '00');
        
    this.datoFamiliarForm = this.fb.group({
      nombre: [null],
      telefono: [null],
      celular: [null],
      parentesco: [null],
      ocupacion: [null],
      domicilio: [null],
    });
    this.viajeForm = this.fb.group({
      fecha: [null],
      pais: [null],
      motivo: [null],
    });

    this.empleoForm = this.fb.group({
      fecha: [null],
      tipo: [null],
      entidad: [null],
      direc: [null],
      ingresos: [null],
    });

    
    this.educaForm = this.fb.group({
      colegio: [null],
      lugar: [null],
      nivel: [null],
      titulo: [null],
    });

    this.personalInformationForm = this.fb.group({
      studentId: [null],
      firstLastname: [null],
      secondLastname: [null],
      name: [null],
      alias: [null],
      stateCivil: [[]],
      nationality: [[]],
      deparment: [[]],
      province: [[]],
      distrity: [[]],
      dateBirth: [null],
      correo : [null],
      paginaWeb : [null],
      facebook : [null],
      twiter : [null],
      celular : [null],
      telefono : [null],

      sexo  : [null],
      talla  : [null],
      peso  : [null],
      colorTez  : [null],
      tipoCara  : [null],
      colorOjos  : [null],

      tipoPelo  : [null],
      tipoNariz  : [null],
      grupoSanguineo  : [null],
      posiUserBarba  : [null],
      senalesParticualres  : [null],

      inscripcion  : [null],
      libretaMilitar  : [null],
      dni  : [null],
      cip  : [null],
      brevete  : [null],
      pasaporte  : [null],

      pnp : [null],
      enjuiciado : [null],
      hospitalizado : [null],
      smv : [null],
      agrupacionPolitica : [null],

      comisaria : [null],
      juzgado : [null],
      hospital : [null],
      dependencia : [null],


    });

    if (this.student != null) {
      this.personalInformationForm.get('studentId').setValue(this.student.studentId);
      this.personalInformationForm.get('name').setValue(this.student.name);
      this.personalInformationForm.get('firstLastname').setValue(this.student.firstLastname);
      this.personalInformationForm.get('secondLastname').setValue(this.student.secondLastname);
      this.personalInformationForm.get('alias').setValue(this.student.alias);
      this.personalInformationForm.get('stateCivil').setValue(this.student.stateCivil);
      this.personalInformationForm.get('nationality').setValue(this.student.nationality);
      this.personalInformationForm.get('deparment').setValue(this.student.deparment);

      this.deparmentChange(this.student.deparment);

      this.personalInformationForm.get('province').setValue(this.student.province);
      this.provinceChange(this.student.province);
      this.personalInformationForm.get('distrity').setValue(this.student.distrity);
      this.personalInformationForm.get('dateBirth').setValue(this.student.dateBirth);
      this.personalInformationForm.get('correo').setValue(this.student.correo);
      this.personalInformationForm.get('paginaWeb').setValue(this.student.paginaWeb);
      this.personalInformationForm.get('facebook').setValue(this.student.facebook);
      this.personalInformationForm.get('twiter').setValue(this.student.twiter);

      this.personalInformationForm.get('celular').setValue(this.student.celular);
      this.personalInformationForm.get('telefono').setValue(this.student.telefono);
      this.personalInformationForm.get('sexo').setValue(this.student.sexo);
      this.personalInformationForm.get('talla').setValue(this.student.talla);
      this.personalInformationForm.get('peso').setValue(this.student.peso);
      this.personalInformationForm.get('colorTez').setValue(this.student.colorTez);
      this.personalInformationForm.get('tipoCara').setValue(this.student.tipoCara);
      this.personalInformationForm.get('colorOjos').setValue(this.student.colorOjos);
      this.personalInformationForm.get('tipoPelo').setValue(this.student.tipoPelo);
      this.personalInformationForm.get('tipoNariz').setValue(this.student.tipoNariz);
      
      this.personalInformationForm.get('grupoSanguineo').setValue(this.student.grupoSanguineo);
      this.personalInformationForm.get('posiUserBarba').setValue(this.student.posiUserBarba);
      this.personalInformationForm.get('senalesParticualres').setValue(this.student.senalesParticualres);
      this.personalInformationForm.get('inscripcion').setValue(this.student.inscripcion);
      this.personalInformationForm.get('libretaMilitar').setValue(this.student.libretaMilitar);
      this.personalInformationForm.get('dni').setValue(this.student.dni);
      this.personalInformationForm.get('cip').setValue(this.student.cip);
      this.personalInformationForm.get('brevete').setValue(this.student.brevete);
      this.personalInformationForm.get('pasaporte').setValue(this.student.pasaporte);
      this.personalInformationForm.get('pnp').setValue(this.student.pnp);
      this.personalInformationForm.get('enjuiciado').setValue(this.student.enjuiciado);
      this.personalInformationForm.get('hospitalizado').setValue(this.student.hospitalizado);

      this.personalInformationForm.get('smv').setValue(this.student.smv);
      this.personalInformationForm.get('agrupacionPolitica').setValue(this.student.agrupacionPolitica);
      this.personalInformationForm.get('comisaria').setValue(this.student.comisaria);
      this.personalInformationForm.get('juzgado').setValue(this.student.juzgado);
      this.personalInformationForm.get('hospital').setValue(this.student.hospital);
      this.personalInformationForm.get('dependencia').setValue(this.student.dependencia);
      this.listOfDataFamilia =   this.student.families == null ? [] : this.student.families  ;
      this.listOfDataEduca = this.student.educations == null ? [] : this.student.educations ;
      this.listOfDataEmpleo = this.student.employees == null ? [] : this.student.employees;
      this.listOfDataViaje = this.student.travels == null ? [] : this.student.travels;
      this.value = false;

    }
  }


  submitForm(): void {
    console.log(this.personalInformationForm.value);
  }

  pre(): void {
    this.current -= 1;
  }

  next(): void {
  
    this.current += 1;
  }

  done(): void {
    for (const i in this.personalInformationForm.controls) {
      this.personalInformationForm.controls[i].markAsDirty();
      this.personalInformationForm.controls[i].updateValueAndValidity();
    }
    if(this.personalInformationForm.valid){
      this.studentObject  = this.personalInformationForm.value;
      this.studentObject.travels  = this.listOfDataViaje;
      this.studentObject.educations  = this.listOfDataEduca;
      this.studentObject.families = this.listOfDataFamilia;
      this.studentObject.employees = this.listOfDataEmpleo;
      this.apiService.insertStudent(this.studentObject).subscribe((response) => {
        this.usuarioSeleccionado.emit('1');
      },
      (err: HttpErrorResponse) => {
      
      });
    }else{
      this.message.create('error', `Por favor valide haber llenado todos los campos`);
    }
  }


  
  filtrarPorID(obj) {
    if ( obj.provincia == '00' &&  obj.distrito == '00') {
      return true;
    } else {
      return false;
    }
  }
  deparmentChange(event){
    this.provinceList = this.list.filter(obj =>obj.departamento == event && obj.provincia != '00' &&  obj.distrito == '00');
  }
  provinceChange(event){
    this.distrityList = this.list.filter(obj => obj.provincia == event &&  obj.distrito != '00');
  }
  submitViajeForm(){
    for (const i in this.viajeForm.controls) {
    this.viajeForm.controls[i].markAsDirty();
    this.viajeForm.controls[i].updateValueAndValidity();
    }
    if(this.viajeForm.valid){
      this.listOfDataViaje.push(this.viajeForm.value)
    }
  }
  submitEmpleoForm(){
    for (const i in this.empleoForm.controls) {
    this.empleoForm.controls[i].markAsDirty();
    this.empleoForm.controls[i].updateValueAndValidity();
    }
    if(this.empleoForm.valid){
      this.listOfDataEmpleo.push(this.empleoForm.value)
    }
  }
  submitDataFamiliaForm(){
    for (const i in this.datoFamiliarForm.controls) {
    this.datoFamiliarForm.controls[i].markAsDirty();
    this.datoFamiliarForm.controls[i].updateValueAndValidity();
    }
    if(this.datoFamiliarForm.valid){
      this.listOfDataFamilia.push(this.datoFamiliarForm.value)
    }
  }
  
  
  submitFormEduca(){
    for (const i in this.educaForm.controls) {
      this.educaForm.controls[i].markAsDirty();
      this.educaForm.controls[i].updateValueAndValidity();
      }
      if(this.educaForm.valid){
        this.listOfDataEduca.push(this.educaForm.value)
      }
  }

}
