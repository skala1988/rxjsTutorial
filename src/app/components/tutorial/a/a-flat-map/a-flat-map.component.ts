import { Component, OnInit, ElementRef, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { DisplayTextService } from '../../../../services/display-text.service';
import { Http } from '@angular/http';

@Component({
  selector: 'app-a-flat-map',
  templateUrl: './a-flat-map.component.html',
  styleUrls: ['./a-flat-map.component.css']
})
export class AFlatMapComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  subscription2: Subscription;

  constructor(
    private el: ElementRef,
    private displayTextService: DisplayTextService,
    private http: Http
  ) {}

  ngOnInit() {
    let obs = Observable.interval(200).take(20);
    let getObs = this.http.get('/');

    this.subscription2 = obs.subscribe(() => {
      getObs.subscribe(() => {
        this.displayTextService.displayText(this.el.nativeElement.querySelector('#container1'), 'http response');
      })
    });

    // observable -> emit value -> map returning observable -> flat it to single stream
    this.subscription = obs.flatMap((isAdmin) => getObs).subscribe(() => {
      this.displayTextService.displayText(this.el.nativeElement.querySelector('#container2'), 'http response');
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.subscription2.unsubscribe();
  }
}
