import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';


import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomePageComponent } from './components/home-page/home-page.component';
//import { MainRegisterComponent } from './components/main-register/main-register.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { UploadTestComponent } from './components/upload-test/upload-test.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
 // { path: 'main-reg', component: MainRegisterComponent },
  { path: 'uploadtest', component: UploadTestComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false }
    //,{ relativeLinkResolution: 'legacy' }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const arrayOffRouterIndex = [HomePageComponent,

 // MainRegisterComponent,
  PageNotFoundComponent]

  export const arrayOfHeadAndFooter = [HeaderComponent,FooterComponent,];
