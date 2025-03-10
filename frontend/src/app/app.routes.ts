import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DocsComponent } from './docs/docs.component';
import { DocsLayoutComponent } from './layouts/docs-layout/docs-layout.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

export const routes: Routes = [

    {
        path: '',
        component: MainLayoutComponent,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
        ]
    },
    {
        path: 'docs',
        component: DocsLayoutComponent,
        children: [
            { path: '', component: DocsComponent },
        ]
    },
];
