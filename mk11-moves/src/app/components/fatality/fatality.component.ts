import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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

  constructor(public router: Router, public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      params => {
        this.currentCharacter = params.char;
        this.selectedMove = params.fat;
      }
    );
    this.fList = this.getFatalityList(this.currentCharacter);
  }

  ngOnChanges():void {
    this.showFatality = true;
  }

  facingLeft() {
    console.log("facing left");
    console.log(this.selectedMove)
    
    this.fatalityName = this.fList[3 * this.selectedMove];
    const flippedDirection = this.fList[3 * this.selectedMove + 1];
    console.log("original: " + flippedDirection)
    this.fatalityDistance = this.fList[3 * this.selectedMove + 2];
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
    console.log("facing right");
    this.fatalityName = this.fList[3 * this.selectedMove];
    this.fatalityInput = this.fList[3 * this.selectedMove + 1]
    this.fatalityDistance = this.fList[3 * this.selectedMove + 2]
    this.showFatality = true;
    this.displayMoves();
  }

  displayMoves():void {
    console.log("displaying moves");
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

  getFatalityList(char:any) {
    switch(char) {
      case "baraka":
          return [
              "food for thought", 
              ['b', 'd', 'b', 4], 
              'close'
            ,
              'rock, paper, baraka', 
              ['b', 'f', 'b', 1], 
              'close'
          ]
      case 'cassie cage':
          return [
                'i <3 u',
                ['d', 'd', 'f', 2],
                'mid'
            ,
                '#GirlPower',
                ['b', 'd', 'd','b', 4],
                'mid'
            ]

      case 'cetrion':
          return [
                'maintaining balance',
                ['b', 'd', 'f', 'd', 2],
                'mid'
            ,
                'good and evil',
                ['b','d', 'b', 1],
                'mid'
            ]

      case 'dvorrah':
          return [
                'new species',
                ['b', 'f', 'b', 1],
                'close'
            ,
                "can't die",
                ['b', 'd', 'd', 2],
                'mid'
            ]

      case 'erron black':
          return [
                'melted',
                ['d', 'd', 'd', 3],
                'mid'
            ,
                'death trap',
                ['d', 'f', 'd', 4],
                'mid'
            ]
            
      case 'frost':
        return [
              'ice sculpture',
              ['f', 'b', 'd', 1],
              'close'
          ,
              'the cyber initiative',
              ['b', 'f', 'd', 'f', 2],
              'mid'
          ]

      case 'geres':
          return [
                'phasing through time',
                ['b', 'd', 'd', 1],
                'any'
            ,
                'peeling back',
                ['d', 'f', 'b', 3],
                'close'
            ]

      case 'jacqui briggs':
          return [
                'spider mines',
                ['f', 'b', 'f', 1],
                'mid'
            ,
                "nothin' but neck",
                ['b', 'f', 'b', 2],
                'mid'
            ]

      case 'jade':
          return [
                'bow before me',
                ['d', 'd', 'f', 'd', 2],
                'any'
            ,
                'pole dance',
                ['b', 'f', 'd', 'f', 3],
                'close'
            ]

      case 'jax briggs':
          return [
                'coming in hot',
                ['f', 'd', 'f', 1],
                'close'
            ,
                'still got it',
                ['b', 'f', 'b', 'd', 3],
                'close'
            ]

      case 'johnny cage':
          return [
                "mr cage's neighborhood",
                ['f', 'b', 'd', 'd', 2],
                'close'
            ,
                'who hired this guy',
                ['f', 'd', 'f', 3],
                'close'
            ]

      case 'kabal':
          return [
                'road rash',
                ['b', 'f', 'd', 'f', 1],
                'mid'
            ,
                'hooked',
                ['d', 'd', 'd', 2],
                'close'
            ]

      case 'kano':
          return [
                'last dance',
                ['f', 'd', 'd', 3],
                'close'
            ,
                'face like a dropped pie',
                ['b', 'd', 'f', 4],
                'close'
            ]

      case 'kitana':
          return [
                'gore-nado',
                ['d','d','d','d', 3],
                'mid'
            ,
                'royal execution',
                ['d', 'b', 'f', 3],
                'mid'
            ]

      case 'kollector':
          return [
                'for the kollection',
                ['d','d','d','d',2],
                'close'
            ,
                'head lantern',
                ['d', 'f', 'd', 3],
                'close'
            ]

      case 'kotal kahn':
          return [
                'totem sacrifice',
                ['b','d','b',1],
                'close'
            ,
                'kat food',
                ['b', 'f', 'b', 'f', 3],
                'close'
            ]

      case 'kung lao':
          return [
                'headed nowhere',
                ['d','f','b','d',4],
                'close'
            ,
                'meat slicer',
                ['d', 'f', 'd', 1],
                'close'
            ]

      case 'liu kang':
          return [
                'burn out',
                ['d','b','d','f',3],
                'close'
            ,
                'belly of the beast',
                ['b', 'd', 'b', 'f', 4],
                'mid'
            ]

      case 'noob saibot':
          return [
                'split decision',
                ['b','f','b','f',2],
                'mid'
            ,
                'split decision',
                ['d', 'd', 'd', 3],
                '3'
            ]

      case 'raiden':
          return [
                'alternating current',
                ['b','d','b',3],
                'mid'
            ,
                'direct current',
                ['d', 'f', 'b', 1],
                'close'
            ]

      case 'scorpion':
          return [
                "you're next",
                ['b','d','d',3],
                'far'
            ,
                'chain reaction',
                ['d', 'f', 'b', 4],
                'far'
            ]

      case 'skarlet':
          return [
                'bloody mess',
                ['f','b','d',1],
                'mid'
            ,
                'heart condition',
                ['d', 'd', 'f', 2],
                'far'
            ]

        case 'shao kahn':
            return [
                    'back blown out',
                    ['b', 'f', 'd', 'd', 4],
                    'mid'
                  ,
                    'Kahn-Sequences',
                    ['b', 'f', 'b', 3],
                    'close'
                  ]

      case 'sonya':
          return [
                'to the choppa',
                ['d','f','b',4],
                'mid'
            ,
                'supply drop',
                ['b', 'f', 'd', 1],
                'close'
            ]

      case 'sub-zero':
          return [
                'ice-cutioner',
                ['b','f','b', 4],
                'mid'
            ,
                'frozen in time',
                ['f', 'd', 'f', 2],
                'mid'
            ]
            default: return ''
        }
      }
    }

function getCurrentCharacter(curr: any, list: any) {
  for(let i=0; i<curr.length; i++) {
    console.log(curr[i]);
  }

  // const lastIndex = curr.length;
  // const fatality = curr[lastIndex];
  // console.log(fatality);
}