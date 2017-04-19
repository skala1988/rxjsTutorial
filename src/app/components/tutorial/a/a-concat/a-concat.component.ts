import { Component, OnInit, OnDestroy, ElementRef } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { DisplayTextService } from '../../../../services/display-text.service';

@Component({
  selector: 'app-a-concat',
  templateUrl: './a-concat.component.html',
  styleUrls: ['./a-concat.component.css']
})
export class AConcatComponent implements OnInit, OnDestroy {
  subscription: Subscription;

  constructor(
    private el: ElementRef,
    private displayTextService: DisplayTextService
  ) {}

  ngOnInit() {
    let obs = Observable.interval(100);
    let even = value =>  value % 2 === 0;
    let odd = value =>  value % 2 === 1;

    let evenObs = obs
      .filter(even)
      .take(10);
    let oddObs = obs
      .filter(odd)
      .take(10);

    let concatObs = Observable.concat(oddObs, evenObs);
    this.subscription = concatObs
      .subscribe(data => {
        this.displayTextService.displayText(this.el.nativeElement, data);
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
