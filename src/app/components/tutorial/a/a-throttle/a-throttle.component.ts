import { Component, OnInit, ElementRef, OnDestroy } from '@angular/core';
import { DisplayTextService } from '../../../../services/display-text.service';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-a-throttle',
  templateUrl: './a-throttle.component.html',
  styleUrls: ['./a-throttle.component.css']
})
export class AThrottleComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  times = [
    // 100 - 300
    { value: 0, time: 100 },
    { value: 1, time: 200 },
    // 400 - 600
    { value: 2, time: 400 },
    { value: 3, time: 600 },
    // 900 - x
    { value: 4, time: 900 }
  ];

  constructor(
    private el: ElementRef,
    private displayTextService: DisplayTextService
  ) {}

  ngOnInit() {
    let obs = Observable.from(this.times)
      .flatMap(function (item) {
        return Observable
          .of(item.value)
          .delay(item.time);
      })
      .throttle(val => Observable.interval(200));

    this.subscription = obs.subscribe(data => {
      this.displayTextService.displayText(this.el.nativeElement, data);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
