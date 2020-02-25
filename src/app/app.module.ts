import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StepsIndicatorComponent } from './shared/steps-indicator/steps-indicator.component';

@NgModule({
  declarations: [
    AppComponent,
    StepsIndicatorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
