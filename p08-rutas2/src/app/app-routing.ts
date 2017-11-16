import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { AboutComponent } from './about/about.component';
import { AutoresComponent } from './autores/autores.component';

const routes: Routes = [
    { path: 'inicio', component: MainComponent },
    { path: 'autores', component: AutoresComponent },
    { path: 'about', component: AboutComponent },
    { path: 'catalogo', component: CatalogoComponent },
    { path: 'noticias', component: NoticiasComponent },
    { path: '', pathMatch: 'full', redirectTo: 'inicio'}
];

export const appRouting = RouterModule.forRoot(routes);
