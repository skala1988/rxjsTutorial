import { Component, OnInit, OnDestroy, ElementRef } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { DisplayTextService } from '../../../../services/display-text.service';

@Component({
  selector: 'app-a-interval',
  templateUrl: './a-interval.component.html',
  styleUrls: ['./a-interval.component.css']
})
export class AIntervalComponent implements OnInit, OnDestroy {
  subscription: Subscription;

  constructor(
    private el: ElementRef,
    private displayTextService: DisplayTextService
  ) {}

  ngOnInit() {
    let obs = Observable.interval(200).take(20);

    this.subscription = obs.subscribe(counter => {
      this.displayTextService.displayText(this.el.nativeElement, counter);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
