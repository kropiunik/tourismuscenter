import { RechnungComponent } from './rechnung/rechnung.component';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { UstComponent } from './umsatzsteuer/ust.component';

export const ROUTE_CONFIG: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: AppComponent
    },
    {
        path: 'ust',
        component: UstComponent
    },
    {
        path: 'rechnung',
        component: RechnungComponent
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];
