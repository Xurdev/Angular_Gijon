import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { MainModule } from './main/main.module';
import { BookMockService } from './services/book-mock.service';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BookGoogleService } from './services/book-google.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MainModule,
    SharedModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    BookMockService,
    BookGoogleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
