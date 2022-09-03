import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoveService } from 'src/move.service';

@Component({
  selector: 'app-fatality',
  templateUrl: './fatality.component.html',
  styleUrls: ['./fatality.component.css']
})
export class FatalityComponent implements OnInit {

  showFatality = false;
  currentCharacter:any;
  fList:any;
  selectedMove:any;
  fatalityInput:any;
  fatalityDistance:any;
  fatalityName:any;

  constructor(public router: Router, 
            public route: ActivatedRoute,
            private serv: MoveService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      params => {
        this.currentCharacter = params.char;
        let moveChoice = parseInt(params.fat) + 1;
        if(moveChoice <= 2) {
            this.selectedMove = `fatality${moveChoice}`;
        }
        else if(moveChoice === 3) {
            this.selectedMove = "stage"
        }
        else if(moveChoice === 4) {
            this.selectedMove = "friendship"
        }
        else {
            this.selectedMove = "brutality"
        }
      }
    );
    this.fList = this.serv.getMoves(this.currentCharacter);
    this.fatalityName = this.fList[this.selectedMove].name;
    this.fatalityDistance = this.fList[this.selectedMove].range;
  }

  ngOnChanges():void {
    this.showFatality = true;
  }

  facingLeft() {
    const flippedDirection = this.fList[this.selectedMove].move;
    let modDirection = [];
    for(let item in flippedDirection) {
        let keyPress = flippedDirection[item]
        if(keyPress === 'f') {
            modDirection.push('b');
        }
        else if(keyPress === 'b') {
            modDirection.push('f');
        }
        else {
            modDirection.push(keyPress);
        }
    
        this.fatalityInput = modDirection;
        console.log("modified: " + modDirection)
    }
    this.showFatality = true;
    this.displayMoves();
  }

  facingRight() {
    this.fatalityInput = this.fList[this.selectedMove].move;
    this.showFatality = true;
    this.displayMoves();
  }

  displayMoves():void {
    for(let stuff in this.fatalityInput) {
        const img = new Image(60, 60);
        let move = this.fatalityInput[stuff];
        let buttonPress;
        if(move === 1) {
            buttonPress = 'a-button'
        }
        else if(move === 2) {
            buttonPress = 'b-button'
        }
        else if(move === 3) {
            buttonPress = 'x-button'
        }
        else if(move === 4) {
            buttonPress = 'y-button'
        }
        else{
            buttonPress = move;
        }
        img.src = `/assets/images/${buttonPress}.png`;
        let element:HTMLElement |null = document.getElementById('input-moves');
        if(element) {
            element.appendChild(img);
        }
    }
  }

  goBack() {
    this.router.navigate(["/home"]);
  }
}