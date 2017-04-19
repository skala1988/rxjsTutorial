import { Routes } from '@angular/router';
import * as Components from './components';
import * as ARoutes from './components/tutorial/a/a-tutorial.router';

export const AppRoutes: Routes = [
  {path: '', component: Components.MainPageComponent},
  {path: 'a', component: Components.ATutorialComponent, children: ARoutes.AppRoutes},
  {path: '**', component: Components.NotFoundPageComponent}
];
