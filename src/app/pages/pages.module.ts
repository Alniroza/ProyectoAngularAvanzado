import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graphic1Component } from './graphic1/graphic1.component';
import { PagesComponent } from './pages.component';
import { NopageComponent } from './nopage/nopage.component';

import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';



@NgModule({
    declarations: [
        DashboardComponent,
        ProgressComponent,
        Graphic1Component,
        PagesComponent,
        NopageComponent
    ],
    exports: [
        DashboardComponent,
        ProgressComponent,
        Graphic1Component,
        PagesComponent,
        NopageComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule
    ]
})
export class PagesModule { }
