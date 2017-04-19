import { Component, OnInit, OnDestroy, ElementRef } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { DisplayTextService } from '../../../../services/display-text.service';

@Component({
  selector: 'app-a-map',
  templateUrl: './a-map.component.html',
  styleUrls: ['./a-map.component.css']
})
export class AMapComponent implements OnInit, OnDestroy {
  subscription: Subscription;

  constructor(
    private el: ElementRef,
    private displayTextService: DisplayTextService
  ) {}

  ngOnInit() {
    let obs = Observable.interval(100);
    let even = value =>  value % 2 === 0;

    this.subscription = obs
      .take(30)
      .map(counter => {
        return even(counter) ? 'even' : 'odd';
      })
      .subscribe(data => {
        this.displayTextService.displayText(this.el.nativeElement, data);
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
