import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToggleComponent } from './components/content-projection/toggle/toggle.component';
import { ToggleWrapperComponent } from './components/content-projection/toggle-wrapper/toggle-wrapper.component';
import { IsAdultPipe } from './pipes/is-adult.pipe';
import { UserListComponent } from './components/users/user-list/user-list.component';
import { PluralPipePipe } from './pipes/plural-pipe.pipe';
import { CustomAsyncPipe } from './pipes/custom-async.pipe';
import { WordCountPipe } from './pipes/word-count.pipe';
import { AngularPipeComponent } from './components/angular-pipe/angular-pipe.component';
import { AgePipe } from './pipes/age.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ToggleComponent,
    ToggleWrapperComponent,
    IsAdultPipe,
    UserListComponent,
    PluralPipePipe,
    CustomAsyncPipe,
    WordCountPipe,
    AngularPipeComponent,
    AgePipe,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
