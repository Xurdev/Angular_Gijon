import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FootComponent } from './foot/foot.component';
import { HeaderComponent } from './header/header.component';
import { LogoComponent } from './logo/logo.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FootComponent,
                HeaderComponent,
                LogoComponent],
  exports: [FootComponent,
            HeaderComponent] // lo exportamos fuera para su uso desde otros módulos
})
export class SharedModule { }
