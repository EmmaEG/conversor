import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConversorComponent } from './components/conversor/conversor.component';


import { HomeComponent } from './components/home/home.component';

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'conversor', component: ConversorComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
