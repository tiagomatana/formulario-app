import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formulario-app';
  //For all users
  //admin = (/true/i).test(localStorage.getItem("admin"));
  //For Admin
  admin = true;
}
