import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { arrayOfRegisterComponent, MainRegisterRoutingModule } from './main-register-routing.module';

import { MaterialsModule } from '../../materials/materials.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NumberDirective } from '../directive-components/numbers-only.directive';
import { FormsModule } from '@angular/forms';
import { ApiImplementsFunctionCheckService } from './functions/implement-function';
import { ButtomSheetUploadComponent } from './predeegree/predeegree.component';
import { ThaiProvinceService } from 'src/app/services/ThaiProvince.service';
//import { FileUploadService } from 'src/app/services/student-register/FileUpload.formData.service';

@NgModule({
  declarations: [
    arrayOfRegisterComponent,
    ButtomSheetUploadComponent,
    NumberDirective,

  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialsModule,
    MainRegisterRoutingModule,

  ],providers:[
    ApiImplementsFunctionCheckService,
    ThaiProvinceService,
   // FileUploadService,
  ]
})

export class MainRegisterModule { }
