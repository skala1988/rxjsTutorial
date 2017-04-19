import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AOvspComponent } from './a-ovsp/a-ovsp.component';
import { AOfComponent } from './a-of/a-of.component';
import { AFromComponent } from './a-from/a-from.component';
import { ATakeComponent } from './a-take/a-take.component';
import { AIntervalComponent } from './a-interval/a-interval.component';
import { AFlatMapComponent } from './a-flat-map/a-flat-map.component';
import { AThrottleComponent } from './a-throttle/a-throttle.component';
import { ADebounceComponent } from './a-debounce/a-debounce.component';
import { AFilterComponent } from './a-filter/a-filter.component';
import { AMapComponent } from './a-map/a-map.component';
import { AConcatAllComponent } from './a-concat-all/a-concat-all.component';
import { AConcatComponent } from './a-concat/a-concat.component';
import { AMergeComponent } from './a-merge/a-merge.component';
import { AShareComponent } from './a-share/a-share.component';
import { APerformanceComponent } from './a-performance/a-performance.component';
import { AFromEventComponent } from './a-from-event/a-from-event.component';
import { AGroupByComponent } from './a-group-by/a-group-by.component';

@NgModule({
  declarations: [
    AOvspComponent,
    AOfComponent,
    AFromComponent,
    ATakeComponent,
    AIntervalComponent,
    AFlatMapComponent,
    AThrottleComponent,
    ADebounceComponent,
    AFilterComponent,
    AMapComponent,
    AConcatAllComponent,
    AConcatComponent,
    AMergeComponent,
    AShareComponent,
    APerformanceComponent,
    AFromEventComponent,
    AGroupByComponent
  ],
  imports: [
    RouterModule
  ],
  providers: []
})
export class ATutorialModule {}
