import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { myportfolioComponent } from './myportfolio/myportfolio.component';
import { DisplayquotesComponent } from './displayquotes/displayquotes.component';


@Component({
  selector: 'app-root',
  imports: [ RouterOutlet, myportfolioComponent, DisplayquotesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ITS320frontend-fuentebella';
}
