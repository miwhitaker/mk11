import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoveService } from 'src/move.service';

@Component({
  selector: 'app-select-move',
  templateUrl: './select-move.component.html',
  styleUrls: ['./select-move.component.css']
})
export class SelectMoveComponent implements OnInit {

  constructor(public router: Router, 
                public route: ActivatedRoute,
                private serv: MoveService) { }

  currentCharacter:any;
  fList:any;
  allMovesForCharacter:string[] = [];

  ngOnInit(): void {
    this.route.queryParams.subscribe(
        params => {
          this.currentCharacter = params.char;
        })
        this.fList = this.serv.getMoves(this.currentCharacter);
        this.allMovesForCharacter.push(this.fList?.fatality1.name);
        this.allMovesForCharacter.push(this.fList?.fatality2.name);
        this.allMovesForCharacter.push('STAGE');
        this.allMovesForCharacter.push('FRIENDSHIP: ' + this.fList?.friendship.name);
  }

    goToDirectionPage(num:number) {
      this.router.navigate(["/fatality/"],
         {queryParams: {char:this.currentCharacter, fat:num}});
    }

    goBack() {
        this.router.navigate(["/home"]);
    }
}
