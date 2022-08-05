import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';

@Component({
  selector: 'app-choose-fighter',
  templateUrl: './choose-fighter.component.html',
  styleUrls: ['./choose-fighter.component.css']
})
export class ChooseFighterComponent implements OnInit {

  constructor(public router: Router, public route: ActivatedRoute) { }

  fighters: String[] = ['baraka', 'cassie cage', 'cetrion', 'dvorrah','erron black', 'geres', 'jacqui briggs', 'jade', 'jax briggs', 'johnny cage', 'kabal', 'kano', 'kitana', 'kollector', 'kotal kahn', 'kung lao', 'liu kang', 'noob saibot', 'raiden', 'scorpion', 'skarlet', 'sonya', 'sub-zero']

  // character: string;

  ngOnInit(): void {
  }

  chooseYourFighter(character: any) {
    this.router.navigate(['/select/' + `${character}`]);
  }

}
