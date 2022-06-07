import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { SectionComponent } from './section/section.component';
import { FooterComponent } from './footer/footer.component';
import { SectionContactComponent } from './section-contact/section-contact.component';
import { HomeComponent } from './home/home.component';
import { Templete2Component } from './templete2/templete2.component';
import { ServicesComponent } from './services/services.component';
import { TraveauComponent } from './traveau/traveau.component';
import {HttpClientModule} from '@angular/common/http';
import { ContactComponent } from './contact/contact.component';
import {FormsModule, ReactiveFormsModule, FormControl} from "@angular/forms";
import {RouterModule, Routes } from '@angular/router'
import {mergeMap} from "rxjs";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    SectionComponent,
    FooterComponent,
    SectionContactComponent,
    HomeComponent,
    Templete2Component,
    ServicesComponent,
    TraveauComponent,
    ContactComponent,

  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
      RouterModule,

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
