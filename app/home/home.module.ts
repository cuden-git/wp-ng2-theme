import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RightColComponent } from '../right-col.component';
import { HomePanel } from './home-panel.component';

@NgModule({
   imports:[CommonModule],
   declarations: [HomeComponent,HomePanel/*, RightColComponent*/],
   exports: [HomeComponent,HomePanel/*, RightColComponent*/]
})
export class HomeModule{}