import { BrowserModule } from '@angular/platform-browser';
import { NgModule, enableProdMode } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DataService } from './services/data.service';
import { ReversemodeDirective } from './directives/reversemode.directive';

enableProdMode();

@NgModule({
  declarations: [
    AppComponent,
    ReversemodeDirective
  ],
  imports: [
    BrowserModule, HttpModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})

export class AppModule { }
