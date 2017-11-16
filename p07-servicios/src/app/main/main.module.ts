import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { SearchBooksComponent } from './search-books/search-books.component';
import { FormsModule } from '@angular/forms';
import { SearchBooksAsyncComponent } from './search-books-async/search-books-async.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [MainComponent,
    SearchBooksComponent,
    SearchBooksAsyncComponent],
  exports: [MainComponent]
})
export class MainModule { }
