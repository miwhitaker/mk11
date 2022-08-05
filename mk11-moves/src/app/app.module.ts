import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChooseFighterComponent } from './components/choose-fighter/choose-fighter.component';
import { SelectMoveComponent } from './components/select-move/select-move.component';
import { DirectionComponent } from './components/direction/direction.component';
import { FatalityComponent } from './components/fatality/fatality.component';

@NgModule({
  declarations: [
    AppComponent,
    ChooseFighterComponent,
    SelectMoveComponent,
    DirectionComponent,
    FatalityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
