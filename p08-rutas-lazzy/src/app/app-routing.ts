import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: 'inicio', loadChildren: './main/main.module#MainModule' },
    { path: 'autores', loadChildren: './autores/autores.module#AutoresModule' },
    { path: 'about', loadChildren: './about/about.module#AboutModule' },
    { path: 'catalogo', loadChildren: './catalogo/catalogo.module#CatalogoModule' },
    { path: 'noticias', loadChildren: './noticias/noticias.module#NoticiasModule' },
    { path: '', pathMatch: 'full', redirectTo: 'inicio'}
];

export const appRouting = RouterModule.forRoot(routes);
