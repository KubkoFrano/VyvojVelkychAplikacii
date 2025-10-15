import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'dashboard',
        loadComponent: () =>
        import('./dashboard/dashboard').then(m => m.Dashboard)
    },
    {
        path: 'basic-accounts',
        loadComponent: () =>
        import('./basic-accounts-list/basic-accounts-list').then(m => m.BasicAccountsList)
    },
    {
        path: 'basic-accounts/detail/:id',
        loadComponent: () =>
        import('./basic-accounts/basic-detail/basic-detail').then(m => m.BasicDetail),
    },
    {
        path: '**',
        loadComponent: () =>
        import('./dashboard/dashboard').then(m => m.Dashboard)
    },
];
