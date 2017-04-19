import { Component, OnInit, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { DisplayTextService } from '../../../../services/display-text.service';

@Component({
  selector: 'app-a-share',
  templateUrl: './a-share.component.html',
  styleUrls: ['./a-share.component.css']
})
export class AShareComponent implements OnInit {
  constructor(
    private el: ElementRef,
    private displayTextService: DisplayTextService
  ) {}

  ngOnInit() {
    let container = '#container1';
    const source = Observable.timer(1000);

    const example = source
      .do(() => this.displayTextService.displayText(this.el.nativeElement.querySelector(container), '***SIDE EFFECT***'))
      .map((data) => {
        this.displayTextService.displayText(this.el.nativeElement.querySelector(container), '***map***');
        return data;
      })
      .mapTo('***RESULT***');
    /*
     ***NOT SHARED, SIDE EFFECT WILL BE EXECUTED TWICE***
     output:
     "***SIDE EFFECT***"
     "***RESULT***"
     "***SIDE EFFECT***"
     "***RESULT***"
     */
    example.subscribe(val => {
      this.displayTextService.displayText(this.el.nativeElement.querySelector('#container1'), val);
    });
    example.subscribe(val => {
      this.displayTextService.displayText(this.el.nativeElement.querySelector('#container1'), val);
    });


    const sharedExample = example.share();
    /*
     ***SHARED, SIDE EFFECT EXECUTED ONCE***
     output:
     "***SIDE EFFECT***"
     "***RESULT***"
     "***RESULT***"
     */
    setTimeout(() => {
      container = '#container2';
      sharedExample.subscribe(val => {
        this.displayTextService.displayText(this.el.nativeElement.querySelector('#container2'), val);
      });
      sharedExample.subscribe(val => {
        this.displayTextService.displayText(this.el.nativeElement.querySelector('#container2'), val);
      });
    }, 2000);
  }
}
