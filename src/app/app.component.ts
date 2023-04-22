import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'interactive-rating';

  view = 'rating';
  rated=0;

  onRated(rate:number)
  {
    this.rated = rate;
    this.view = 'feedback';
  }

}
