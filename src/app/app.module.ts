import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes';
import { MainPageComponent } from './components/main-page/main-page.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { SidebarMenuComponent } from './components/sidebar-menu/sidebar-menu.component';
import { ATutorialModule } from './components/tutorial/a/a-tutorial.module';
import { ATutorialComponent } from './components/tutorial/a/a-tutorial.component';
import { DisplayTextService } from './services/display-text.service';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    NotFoundPageComponent,
    SidebarMenuComponent,
    ATutorialComponent
  ],
  imports: [
    BrowserModule,
    ATutorialModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(AppRoutes, {useHash: true})
  ],
  providers: [
    DisplayTextService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
