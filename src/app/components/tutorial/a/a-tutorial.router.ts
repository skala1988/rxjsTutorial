import { Routes } from '@angular/router';
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
import { AConcatComponent } from './a-concat/a-concat.component';
import { AMergeComponent } from './a-merge/a-merge.component';
import { AConcatAllComponent } from './a-concat-all/a-concat-all.component';
import { AShareComponent } from './a-share/a-share.component';
import { APerformanceComponent } from './a-performance/a-performance.component';
import { AFromEventComponent } from './a-from-event/a-from-event.component';
import { AGroupByComponent } from './a-group-by/a-group-by.component';
import { NotFoundPageComponent } from './../../not-found-page/';

export const AppRoutes: Routes = [
  {path: '', component: AOfComponent},
  {path: 'operators/of', component: AOfComponent},
  {path: 'operators/from', component: AFromComponent},
  {path: 'operators/take', component: ATakeComponent},
  {path: 'operators/interval', component: AIntervalComponent},
  {path: 'operators/flatMap', component: AFlatMapComponent},
  {path: 'operators/throttle', component: AThrottleComponent},
  {path: 'operators/debounce', component: ADebounceComponent},
  {path: 'operators/filter', component: AFilterComponent},
  {path: 'operators/concat', component: AConcatComponent},
  {path: 'operators/merge', component: AMergeComponent},
  {path: 'operators/map', component: AMapComponent},
  {path: 'operators/concatAll', component: AConcatAllComponent},
  {path: 'operators/share', component: AShareComponent},
  {path: 'performance', component: APerformanceComponent},
  {path: 'operators/fromEvent', component: AFromEventComponent},
  {path: 'operators/groupBy', component: AGroupByComponent},
  {path: 'ovsp', component: AOvspComponent},
  {path: '**', component: NotFoundPageComponent}
];
