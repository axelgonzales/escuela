
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_I18N, es_ES } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';
import { LoginComponent } from './auth/login/login.component';
import { MainComponent } from './main/view/main/main.component';
import { IconDefinition } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {TabModule} from 'angular-tabs-component';
import { FormLoginComponent } from './auth/login/form-login/form-login.component';
import { MaterialModule } from './material.module';
import { PrincipalComponent } from './main/view/principal/principal.component';
import { CreateStudentComponent } from './main/view/create-student/create-student.component';
import { HeaderComponent } from './main/commons/header/header.component';
import { SearchStudentComponent } from './main/view/main/search-student/search-student.component';
import { PdfViewerComponent } from 'ng2-pdf-viewer'; 
import { ModalModule } from 'ngx-bootstrap/modal';
registerLocaleData(es);

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key])

@NgModule({
  declarations: [
    AppComponent,

    PdfViewerComponent,
    LoginComponent,
    FormLoginComponent,
    MainComponent,
    PrincipalComponent,
    CreateStudentComponent,
    HeaderComponent,
    SearchStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TabModule,
    BrowserAnimationsModule,
    DragDropModule,
    ScrollingModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    ModalModule.forRoot(),
     
  ],
  entryComponents: [CreateStudentComponent],
  // exports: [SearchStudentComponent ],
  providers: [{ provide: NZ_I18N, useValue: es_ES }],
  bootstrap: [AppComponent]
})
export class AppModule { }
