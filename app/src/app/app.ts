import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  title = 'Demo';
  greeting = {'id': 'XXX', 'content': 'Hello World'};
}
