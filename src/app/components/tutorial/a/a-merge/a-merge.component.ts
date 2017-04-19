import { Component, OnInit, OnDestroy, ElementRef } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { DisplayTextService } from '../../../../services/display-text.service';

@Component({
  selector: 'app-a-merge',
  templateUrl: './a-merge.component.html',
  styleUrls: ['./a-merge.component.css']
})
export class AMergeComponent implements OnInit, OnDestroy {
  subscription: Subscription;

  constructor(
    private el: ElementRef,
    private displayTextService: DisplayTextService
  ) {}

  ngOnInit() {
    let obs = Observable.interval(100);
    let obsLonger = Observable.interval(300);
    let even = value =>  value % 2 === 0;
    let odd = value =>  value % 2 === 1;

    let evenObs = obs
      .filter(even)
      .take(10);
    let oddObs = obsLonger
      .filter(odd)
      .take(10);

    let mergeObs = Observable.merge(oddObs, evenObs);
    this.subscription = mergeObs
      .subscribe(data => {
        this.displayTextService.displayText(this.el.nativeElement, data);
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
