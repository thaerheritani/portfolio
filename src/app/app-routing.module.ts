import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SectionComponent} from "./section/section.component";
import {HomeComponent} from "./home/home.component";
import {Templete2Component} from "./templete2/templete2.component";
import {ServicesComponent} from "./services/services.component";
import {TraveauComponent} from "./traveau/traveau.component";
import {ContactComponent} from "./contact/contact.component";

const routes: Routes = [
  {path : "", component : HomeComponent},
  {path : "page", component : Templete2Component,
    children : [
      {path : "presentation", component : SectionComponent},
      {path : "traveau", component : TraveauComponent},
      {path : "service", component : ServicesComponent},
      {path : "contact", component : ContactComponent},

    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
