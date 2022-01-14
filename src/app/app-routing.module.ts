import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { Graphic1Component } from './pages/graphic1/graphic1.component';
import { NopageComponent } from './pages/nopage/nopage.component';
import { PagesComponent } from './pages/pages/pages.component';
import { ProgressComponent } from './pages/progress/progress.component';

const routes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: 'progress', component: ProgressComponent },
            { path: 'graphic1', component: Graphic1Component },
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
        ]
    },

    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },

    { path: '**', component: NopageComponent }
]

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
