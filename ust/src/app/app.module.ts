import {  BrowserModule } from '@angular/platform-browser';
import {   NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UstComponent } from './umsatzsteuer/ust.component';
import { RechnungComponent } from './rechnung/rechnung.component';
import { RouterModule } from '@angular/router';
import { provideForRootGuard } from '@angular/router/src/router_module';
import {ROUTE_CONFIG} from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    UstComponent,
    RechnungComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
