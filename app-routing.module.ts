import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HiringComponent } from './hiring/hiring.component';
import { HomeComponent } from './home/home.component';
import { MoreComponent } from './more/more.component';
import { OlCoursesComponent } from './ol-courses/ol-courses.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'hiring', component:HiringComponent},
  {path:'ol-courses', component:OlCoursesComponent},
  {path:'more', component:MoreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
