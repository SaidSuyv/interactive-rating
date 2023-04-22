import { Component, ElementRef, EventEmitter, Output, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent {

  @Output() onRated:any = new EventEmitter();
  rate=0
  @ViewChildren('rating') buttons!: QueryList<Element>;

  onSubmit()
  {
    if(this.rate == 0) return;

    this.onRated.emit(this.rate);
  }

  onRate(rate:number,event:any)
  {
    event.stopPropagation();
    this.rate = rate;
    var target = event.target;

    if(target.tagName == 'SPAN')
      target = target.parentElement;

      this.buttons.forEach((btn:any)=>btn.nativeElement.classList.remove('active'));

    target.classList.add('active');
  }

}
