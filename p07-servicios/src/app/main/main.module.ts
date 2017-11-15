import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { SearchBooksComponent } from './search-books/search-books.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [MainComponent, SearchBooksComponent],
  exports: [MainComponent]
})
export class MainModule { }
