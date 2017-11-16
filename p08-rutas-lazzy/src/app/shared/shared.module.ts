import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FootComponent } from './foot/foot.component';
import { HeaderComponent } from './header/header.component';
import { LogoComponent } from './logo/logo.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [FootComponent,
                HeaderComponent,
                LogoComponent,
                MenuComponent],
  exports: [FootComponent,
            HeaderComponent,
            MenuComponent] // lo exportamos fuera para su uso desde otros módulos
})
export class SharedModule { }
