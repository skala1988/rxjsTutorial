import { Component, OnInit, ElementRef, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { DisplayTextService } from '../../../../services/display-text.service';

@Component({
  selector: 'app-a-filter',
  templateUrl: './a-filter.component.html',
  styleUrls: ['./a-filter.component.css']
})
export class AFilterComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  subscription2: Subscription;

  constructor(
    private el: ElementRef,
    private displayTextService: DisplayTextService
  ) {}

  ngOnInit() {
    let obs = Observable.interval(100);
    let even = value =>  value % 2 === 0;
    let odd = value =>  value % 2 === 1;

    this.subscription = obs
      .filter(even)
      .take(10)
      .subscribe(data => {
        this.displayTextService.displayText(this.el.nativeElement.querySelector('#container1'), data);
      });

    this.subscription2 = obs
      .filter(odd)
      .take(10)
      .subscribe(data => {
        this.displayTextService.displayText(this.el.nativeElement.querySelector('#container2'), data);
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.subscription2.unsubscribe();
  }
}

