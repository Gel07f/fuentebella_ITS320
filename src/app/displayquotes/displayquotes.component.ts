import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuotesService } from '../quotes.service';

type Quotes = {
  _id: string;
  author: string;
  title: string;
  quotes: string;
  published: string;
  isHenriMatisse?: boolean;
}

@Component({
  selector: 'displayquotes',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './displayquotes.component.html',
  styleUrls: ['./displayquotes.component.css']
})
export class DisplayquotesComponent {
  quotes: Quotes[] = [];

  constructor(private newQuotes: QuotesService) {}

  async ngOnInit() {
    this.newQuotes.Get().subscribe((quotes: Quotes[]) => {
      this.quotes = quotes.map(quote => ({
        ...quote,
        isHenriMatisse: quote.author === 'Henri Matisse',
      }));
    });
  }
}