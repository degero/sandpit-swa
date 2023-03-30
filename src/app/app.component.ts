import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>Hello 1 {{message}}</div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'swatest';

  message = '';

  constructor(private http: HttpClient) {
    this.http.get('/api/message')
      .subscribe((resp: any) => {
        this.message = resp;
      }, (error: any) => {
        console.log("ERROR");
      });
  }
}
