import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ViewappComponent} from './viewapp/viewapp.component' ;
import {PlaceappComponent} from './placeapp/placeapp.component';
import {ContactComponent} from './contact/contact.component' ;
import {SearchComponent} from './search/search.component' ;
import {AppComponent} from './app.component' ;
const routes: Routes = [
 
  {
    component : ViewappComponent ,
    path : 'viewapp'
  },
  {
    component : PlaceappComponent ,
    path : 'placeapp'
  },
  {
    component : ContactComponent ,
    path : 'contactus'
  },
  {
    component : SearchComponent ,
    path : 'search'
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
