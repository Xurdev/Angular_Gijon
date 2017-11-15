import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { MainModule } from './main/main.module';
import { BookMockService } from './services/book-mock.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MainModule,
    SharedModule,
    FormsModule
  ],
  providers: [
    BookMockService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
