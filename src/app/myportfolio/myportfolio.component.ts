import { Component } from '@angular/core';

@Component({
  selector: 'app-myportfolio',
  templateUrl: './myportfolio.component.html',
  styleUrls: ['./myportfolio.component.css']
})
export class myportfolioComponent {
  getInTouch(): void {
    alert('Thank you for visiting my portfolio! Let’s connect soon.');
  }
}
