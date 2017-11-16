import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { SearchBooksComponent } from './search-books/search-books.component';
import { FormsModule } from '@angular/forms';
import { SearchBooksAsyncComponent } from './search-books-async/search-books-async.component';
import { SearchBooksGoogleComponent } from './search-books-google/search-books-google.component';
import { HttpModule } from '@angular/http';
import { SearchHttpServiceComponent } from './search-http-service/search-http-service.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule
  ],
  declarations: [MainComponent,
    SearchBooksComponent,
    SearchBooksAsyncComponent,
    SearchBooksGoogleComponent,
    SearchHttpServiceComponent],
  exports: [MainComponent]
})
export class MainModule { }
