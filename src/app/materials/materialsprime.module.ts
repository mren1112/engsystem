import { NgModule } from '@angular/core';

//import { CalendarModule } from 'primeng/calendar';
import { CalendarModule } from 'primeng/calendar';


const MaterialPrimeComponents = [
  CalendarModule,

 // materialize,
];


@NgModule({
  imports: [MaterialPrimeComponents],
  exports: [MaterialPrimeComponents]
})
export class MaterialsPrimeModule { }
