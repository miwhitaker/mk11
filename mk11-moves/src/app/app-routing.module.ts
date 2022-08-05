import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChooseFighterComponent } from './components/choose-fighter/choose-fighter.component';
import { DirectionComponent } from './components/direction/direction.component';
import { FatalityComponent } from './components/fatality/fatality.component';
import { SelectMoveComponent } from './components/select-move/select-move.component';

const routes: Routes = [
  {path: '', component: ChooseFighterComponent},
  {path: 'select/:char', component: SelectMoveComponent},
  {path: 'facing', component: DirectionComponent},
  {path: 'fatality', component: FatalityComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
