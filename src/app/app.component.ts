import { Component } from '@angular/core';

//This is where you write all of your scripts. All components split into : 1) .html, 2) .css, and 3) .ts

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Todo List';
}
