import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { ComponentInteractionComponent } from './component-interaction/component-interaction.component';

@NgModule({
  declarations: [
    AppComponent,
    LifeCycleComponent,
    ComponentInteractionComponent,
  ],
  imports: [BrowserModule, FormsModule], // import core angular
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
