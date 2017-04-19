import { Component, OnInit, OnDestroy, ElementRef } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { DisplayTextService } from '../../../../services/display-text.service';

@Component({
  selector: 'app-a-ovsp',
  templateUrl: 'a-ovsp.component.html',
  styleUrls: ['a-ovsp.component.scss']
})
export class AOvspComponent implements OnInit, OnDestroy {
  exampleObservableSingle: Observable<number> = Observable.of(5);
  exampleObservableMultiple: Observable<number> = Observable.interval(200);
  unsubscribeMeOnDestroy: Subscription;

  constructor(
    private el: ElementRef,
    private displayTextService: DisplayTextService
  ) {}

  ngOnInit() {
    this.useSingleObservable();
    this.useMultipleObservable(15);
  }

  ngOnDestroy() {
    this.unsubscribeMeOnDestroy.unsubscribe();
  }

  useSingleObservable() {
    this.exampleObservableSingle.toPromise().then(someNumber => {
      this.displayTextService.displayText(this.el.nativeElement, `observable to promise, value: ${someNumber}`);
    });
  }

  useMultipleObservable(takeXValues) {
    this.unsubscribeMeOnDestroy = this.exampleObservableMultiple
      .take(takeXValues)
      .subscribe(index => {
        this.displayTextService.displayText(this.el.nativeElement, `observable, value: ${index}`);
      });
  }
}
