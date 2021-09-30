import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeIndexComponent } from './employee-index/employee-index.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeCreateComponent } from './employee-create/employee-create.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { EmployeeDeleteComponent } from './employee-delete/employee-delete.component';
import{HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    EmployeeIndexComponent,
    EmployeeListComponent,
    EmployeeDetailsComponent,
    EmployeeCreateComponent,
    EmployeeEditComponent,
    EmployeeDeleteComponent
  ],
  imports: [
    CommonModule,HttpClientModule
  ],
  exports:[EmployeeIndexComponent]
})
export class EmployeeModule { }
