import { Component, OnInit, OnDestroy, ElementRef } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { DisplayTextService } from '../../../../services/display-text.service';

@Component({
  selector: 'app-a-debounce',
  templateUrl: './a-debounce.component.html',
  styleUrls: ['./a-debounce.component.css']
})
export class ADebounceComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  times = [
    // 0 - 600
    { value: 0, time: 100 },
    { value: 1, time: 200 },
    { value: 2, time: 400 },
    { value: 3, time: 600 },
    // 200 ms of nothing
    // 900 - x
    { value: 4, time: 900 }
    // 200 ms of nothing
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
      .debounce(val => Observable.interval(200));

    this.subscription = obs.subscribe(data => {
      this.displayTextService.displayText(this.el.nativeElement, data);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
