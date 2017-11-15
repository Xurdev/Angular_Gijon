import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { FormVistaComponent } from './form-vista/form-vista.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormModelComponent } from './form-model/form-model.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [MainComponent, FormVistaComponent, FormModelComponent],
  exports: [MainComponent]
})
export class MainModule { }
