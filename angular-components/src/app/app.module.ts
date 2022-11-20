import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToggleComponent } from './components/content-projection/toggle/toggle.component';
import { ToggleWrapperComponent } from './components/content-projection/toggle-wrapper/toggle-wrapper.component';

@NgModule({
  declarations: [
    AppComponent,
    ToggleComponent,
    ToggleWrapperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
