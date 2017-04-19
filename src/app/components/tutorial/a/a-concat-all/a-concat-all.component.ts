import { Component, OnInit, OnDestroy, ElementRef } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { DisplayTextService } from '../../../../services/display-text.service';

@Component({
  selector: 'app-a-concat-all',
  templateUrl: './a-concat-all.component.html',
  styleUrls: ['./a-concat-all.component.css']
})
export class AConcatAllComponent implements OnInit, OnDestroy {
  subscription: Subscription;

  constructor(
    private el: ElementRef,
    private displayTextService: DisplayTextService
  ) {}

  ngOnInit() {
    let obs = Observable.interval(100).take(5);

    let finalObs = obs
      .map(number1 => {
        return obs
          .take((number1 % 2) + 1)
          .map(number2 => {
            return `${number1}, ${number2}`;
          });
      }).concatAll();

    this.subscription = finalObs.subscribe(data => {
      this.displayTextService.displayText(this.el.nativeElement, data);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
