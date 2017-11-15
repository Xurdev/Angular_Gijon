import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { ListaComponent } from './lista/lista.component';
import { ListaV4Component } from './lista-v4/lista-v4.component';
import { FormsModule } from '@angular/forms';
import { ListaColoresComponent } from './lista-colores/lista-colores.component';
import { PipesComponent } from './pipes/pipes.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [MainComponent,
    ListaComponent,
    ListaV4Component,
    ListaColoresComponent,
    PipesComponent],
  exports: [MainComponent]
})
export class MainModule { }
