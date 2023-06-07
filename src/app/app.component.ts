import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Demo';
  greeting = {};
  constructor(private http: HttpClient) {
    http.get<any>('resource').subscribe((data: { id: String, content: String }) => this.greeting = data);
  }
}