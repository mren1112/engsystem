import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainRegisterComponent } from './main-register.component';
import {  PredeegreeComponent } from './predeegree/predeegree.component';
import { ReportRegisterComponent } from './report-register/report-register.component';
import { StudentRegisterComponent } from './student-register/student-register.component';

export const routes: Routes = [
  {
    path: 'main-reg',
    component: MainRegisterComponent,
    //canActivate: [AuthGuardGuard]
    /*children: [
      {
        path: 'main-reg', // child route path
        component: MainRegisterComponent, // child route component that the router renders
      },
      {
        path: 'student-reg',
        component: StudentRegisterComponent,  // another child route component that the router renders
      },
    ],*/
  },
  {
    path: 'predegree-reg',
    component: PredeegreeComponent,
    //canActivate: [AuthGuardGuard]
  }, {
    path: 'student-reg',
    component: StudentRegisterComponent,
    //canActivate: [AuthGuardGuard]
  }, {
    path: 'rep-register',
    component: ReportRegisterComponent,
    //canActivate: [AuthGuardGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRegisterRoutingModule {}

export const arrayOfRegisterComponent = [
  MainRegisterComponent,
  PredeegreeComponent,
  StudentRegisterComponent,
  ReportRegisterComponent,
];
