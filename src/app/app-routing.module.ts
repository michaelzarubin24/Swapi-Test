import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { NavigationComponent } from './navigation/navigation.component';
import { NavElementComponent } from './nav-element/nav-element.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: 'navigation',
    component: NavigationComponent
  },
  {
    path: 'navigation/:url',
    component: NavElementComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
