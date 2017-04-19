import { Component, OnInit, ElementRef, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { DisplayTextService } from '../../../../services/display-text.service';

@Component({
  selector: 'app-a-group-by',
  templateUrl: './a-group-by.component.html',
  styleUrls: ['./a-group-by.component.css']
})
export class AGroupByComponent implements OnInit, OnDestroy {
  subscription: Subscription;

  constructor() {}

  ngOnInit() {
    const people = [{name: 'Sue', age:25},{name: 'Joe', age: 30},{name: 'Frank', age: 25}, {name: 'Sarah', age: 35}];
    const source = Observable.from(people);

    const example = source
      .groupBy(person => person.age) // to zwraca stream observabli
      .flatMap(group => group.reduce((acc, curr) => [...acc, curr], []));
    /*
     output:
     [{age: 25, name: "Sue"},{age: 25, name: "Frank"}]
     [{age: 30, name: "Joe"}]
     [{age: 35, name: "Sarah"}]
     */
    this.subscription = example.subscribe(val => console.log(val));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
