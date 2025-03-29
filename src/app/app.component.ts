import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { myportfolioComponent } from './myportfolio/myportfolio.component';
import { DisplayquotesComponent } from './displayquotes/displayquotes.component';
import { TodolistComponent } from './todo-list/todo-list.component';


@Component({
  selector: 'app-root',
  imports: [ RouterOutlet, myportfolioComponent, DisplayquotesComponent, TodolistComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ITS320frontend-fuentebella';
}
