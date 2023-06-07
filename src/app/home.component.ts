import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { HttpClient } from '@angular/common/http';

@Component({
    templateUrl: './home.component.html'
})
export class HomeComponent {

    title = 'Demo';
    greeting = {
        id: undefined,
        content: undefined
    };

    constructor(private app: AppService, private http: HttpClient) {
        http.get<any>('resource').subscribe(data => this.greeting = data);
    }

    authenticated() { return this.app.authenticated; }

}