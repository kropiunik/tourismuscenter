import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UstComponent } from './umsatzsteuer/ust.component';
import { RechnungComponent } from './rechnung/rechnung.component';
import { KassabuchComponent } from './kassabuch/kassabuch.component';


import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { KickenComponent } from './kicken/kicken.component';

import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    UstComponent,
    RechnungComponent,
    KassabuchComponent,
    HomeComponent,
    KickenComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatButtonModule,
    MatTableModule,
    RouterModule.forRoot([
      {
          path: '',
          redirectTo: 'start',
          pathMatch: 'full'
      },
      {
          path: 'start',
          component: HomeComponent
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
          path: 'ust',
          component: UstComponent
      },
      {
          path: 'rechnung',
          component: RechnungComponent
      },
      {
        path: 'kicken',
        component: KickenComponent
    },
  
  ]),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
