import { Component, OnInit, ElementRef, OnDestroy } from '@angular/core';
import { DisplayTextService } from '../../../../services/display-text.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-a-of',
  templateUrl: 'a-of.component.html',
  styleUrls: ['a-of.component.css']
})
export class AOfComponent implements OnInit, OnDestroy {
  subscription: Subscription;

  constructor(
    private el: ElementRef,
    private displayTextService: DisplayTextService
  ) {}

  ngOnInit() {
    let obs = Observable.of(1, 2, 3);

    this.subscription = obs.subscribe(number => {
      this.displayTextService.displayText(this.el.nativeElement, number);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
