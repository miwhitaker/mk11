import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChooseFighterComponent } from './components/choose-fighter/choose-fighter.component';
import { SelectMoveComponent } from './components/select-move/select-move.component';
import { FatalityComponent } from './components/fatality/fatality.component';
import { MoveService } from 'src/move.service';

@NgModule({
  declarations: [
    AppComponent,
    ChooseFighterComponent,
    SelectMoveComponent,
    FatalityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [MoveService],
  bootstrap: [AppComponent]
})
export class AppModule { }
