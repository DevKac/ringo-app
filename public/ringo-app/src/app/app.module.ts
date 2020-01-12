import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RingoContainerComponent } from './containers/ringo-container/ringo-container.component';
import { RingoComponent } from './components/ringo/ringo.component';

@NgModule({
  declarations: [
    AppComponent,
    RingoContainerComponent,
    RingoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
