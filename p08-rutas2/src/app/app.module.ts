import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { appRouting } from './app-routing';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

import { MainModule } from './main/main.module';
import { AutoresModule } from './autores/autores.module';
import { AboutModule } from './about/about.module';
import { CatalogoModule } from './catalogo/catalogo.module';
import { NoticiasModule } from './noticias/noticias.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    appRouting,
    MainModule,
    SharedModule,
    AutoresModule,
    AboutModule,
    CatalogoModule,
    NoticiasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
