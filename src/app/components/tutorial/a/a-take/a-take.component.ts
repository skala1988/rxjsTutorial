import { Component, OnInit, OnDestroy, ElementRef } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { DisplayTextService } from '../../../../services/display-text.service';

@Component({
  selector: 'app-a-take',
  templateUrl: 'a-take.component.html',
  styleUrls: ['a-take.component.css']
})
export class ATakeComponent implements OnInit, OnDestroy {
  subscription: Subscription;

  constructor(
    private el: ElementRef,
    private displayTextService: DisplayTextService
  ) {}

  ngOnInit() {
    let obs = Observable.from([4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]);

    this.subscription = obs.take(3).subscribe(number => {
      this.displayTextService.displayText(this.el.nativeElement, number);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
