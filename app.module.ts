import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OlCoursesComponent } from './ol-courses/ol-courses.component';
import { HiringComponent } from './hiring/hiring.component';
import { MoreComponent } from './more/more.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OlCoursesComponent,
    HiringComponent,
    MoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
