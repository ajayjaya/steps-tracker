import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DepartmentComponent } from './department/department.component';
import { TabComponent } from './tab/tab.component';
import { TabsComponent } from './tabs/tabs.component';
import { PostComponent } from './post/post.component';
import { StepsIndicatorComponent } from './shared/steps-indicator/steps-indicator.component';

@NgModule({
  declarations: [
    AppComponent,
    DepartmentComponent,
    TabComponent,
    TabsComponent,
    PostComponent,
    StepsIndicatorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
