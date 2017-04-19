import { Component, OnInit, ElementRef, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { DisplayTextService } from '../../../../services/display-text.service';

@Component({
  selector: 'app-a-from',
  templateUrl: 'a-from.component.html',
  styleUrls: ['a-from.component.css']
})
export class AFromComponent implements OnInit, OnDestroy {
  subscription: Subscription;

  constructor(
    private el: ElementRef,
    private displayTextService: DisplayTextService
  ) {}

  ngOnInit() {
    let obs = Observable.from([4, 5, 6]);

    this.subscription = obs.subscribe(number => {
      this.displayTextService.displayText(this.el.nativeElement, number);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
