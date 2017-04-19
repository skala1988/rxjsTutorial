import { Component, OnInit, ElementRef } from '@angular/core';
import { DisplayTextService } from '../../../../services/display-text.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-a-from-event',
  templateUrl: './a-from-event.component.html',
  styleUrls: ['./a-from-event.component.css']
})
export class AFromEventComponent implements OnInit {
  subscription: Subscription;

  constructor(
    private el: ElementRef,
    private displayTextService: DisplayTextService
  ) {}

  ngOnInit() {
    const obs = Observable.fromEvent(this.el.nativeElement, 'click');
    this.subscription = obs.subscribe(ev => {
      console.log(ev);
      this.displayTextService.displayText(this.el.nativeElement, 'click');
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
