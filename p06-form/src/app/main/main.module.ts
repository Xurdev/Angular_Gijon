import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { FormVistaComponent } from './form-vista/form-vista.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [MainComponent, FormVistaComponent],
  exports: [MainComponent]
})
export class MainModule { }
