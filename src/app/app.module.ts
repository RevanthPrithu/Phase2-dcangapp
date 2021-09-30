import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{FormsModule} from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HelpComponent } from './help/help.component';
import { LoginComponent } from './login/login.component';
import { IndexComponent } from './index/index.component';
import { EbEx01Component } from './eb-ex01/eb-ex01.component';
import { EbEx02Component } from './eb-ex02/eb-ex02.component';
import { EbEx03Component } from './eb-ex03/eb-ex03.component';
import { EbEx04Component } from './eb-ex04/eb-ex04.component';
import { SdEx01Component } from './sd-ex01/sd-ex01.component';
import { SdEx02Component } from './sd-ex02/sd-ex02.component';
import { SdEx03Component } from './sd-ex03/sd-ex03.component';
import { SdEx04Component } from './sd-ex04/sd-ex04.component';
import { PbEx01Component } from './pb-ex01/pb-ex01.component';
import { PbEx02Component } from './pb-ex02/pb-ex02.component';
import { SdindexComponent } from './sdindex/sdindex.component';
import { PbindexComponent } from './pbindex/pbindex.component';
import { EbindexComponent } from './ebindex/ebindex.component';
import { PersonCrudComponent } from './person-crud/person-crud.component';
import { StudentModule } from './student/student.module';
import { StudentIndexComponent } from './student-index/student-index.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentAddComponent } from './student-add/student-add.component';
import { StudentDeleteComponent } from './student-delete/student-delete.component';
import { EmployeeModule } from './employee/employee.module';
import { EmployeeCreateComponent } from './employee/employee-create/employee-create.component';
import { EmployeeDeleteComponent } from './employee/employee-delete/employee-delete.component';
import { EmployeeDetailsComponent } from './employee/employee-details/employee-details.component';
import { EmployeeIndexComponent } from './employee/employee-index/employee-index.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    HelpComponent,
    LoginComponent,
    IndexComponent,
    EbEx01Component,
    EbEx02Component,
    EbEx03Component,
    EbEx04Component,
    SdEx01Component,
    SdEx02Component,
    SdEx03Component,
    SdEx04Component,
    PbEx01Component,
    PbEx02Component,
    SdindexComponent,
    PbindexComponent,
    EbindexComponent,
    PersonCrudComponent,
    StudentIndexComponent,
    StudentListComponent,
    StudentDetailsComponent,
    StudentAddComponent,
    StudentDeleteComponent,
    EmployeeCreateComponent,
    EmployeeDeleteComponent,
    EmployeeDetailsComponent,
    EmployeeIndexComponent,
    EmployeeListComponent
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StudentModule,
    EmployeeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
