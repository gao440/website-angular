import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CharlesComponent } from './components/charles/charles.component';
import{ AboutComponent } from './components/pages/about/about.component';
const routes: Routes = [
  {path: '', component: CharlesComponent},
  {path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
