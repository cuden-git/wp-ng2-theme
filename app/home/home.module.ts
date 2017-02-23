import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { RightColComponent } from '../right-col.component';
@NgModule({
   imports:[],
   declarations: [HomeComponent/*, RightColComponent*/],
   exports: [HomeComponent/*, RightColComponent*/]
})
export class HomeModule{}