import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-nopage',
    templateUrl: './nopage.component.html',
    styleUrls: ['./nopage.component.css'
    ]
})
export class NopageComponent implements OnInit {

    year = new Date().getFullYear();

    constructor() { }

    ngOnInit(): void {
    }

}
