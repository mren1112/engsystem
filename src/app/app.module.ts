import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { BackButtonDisableModule } from 'angular-disable-browser-back-button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
 /*  { path: 'course', component: CourseComponent },
    { path: "course", loadChildren: () => import('./component/couseselect/course.component').then(m => m.CourseComponent),
  },*/
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   // BackButtonDisableModule.forRoot({ preserveScrollPosition: true }),
    RouterModule.forRoot(appRoutes, { useHash: true }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
