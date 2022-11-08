import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router, RouterModule, Routes } from '@angular/router';

import { AppRoutingModule, arrayOffRouterIndex, arrayOfHeadAndFooter } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialsModule } from './materials/materials.module';
import { MainRegisterModule } from './components/main-register/main-register.module';

import { MaterialsPrimeModule } from './materials/materialsprime.module';
import { MatDialogModule } from '@angular/material/dialog';
import { PublicDialogComponent } from './components/main-register/publicdialog/dialog.component';
import { UploadTestComponent } from './components/upload-test/upload-test.component';

@NgModule({
  declarations: [
    AppComponent,
    arrayOffRouterIndex,
    arrayOfHeadAndFooter,
    PublicDialogComponent,
    UploadTestComponent,
    //NumberDirective,
   // NumbersOnlyDirective,
  ],
  imports: [
    BrowserModule,
    MainRegisterModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialsModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
   // MaterialsPrimeModule,

    //BackButtonDisableModule.forRoot({ preserveScrollPosition: true }),
  ],
  exports: [RouterModule],
  entryComponents:[MatDialogModule],
  providers: [{ provide: LOCALE_ID, useValue: "th-TH" }],
  bootstrap: [AppComponent],
})
export class AppModule {}
