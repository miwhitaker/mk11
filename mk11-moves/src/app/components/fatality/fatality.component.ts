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
    if(this.selectedMove == 0) {
        console.log('inside the if block')
        this.fatalityName = this.fList[0];
        const flippedDirection = this.fList[1];
        console.log("original: " + flippedDirection)
        this.fatalityDistance = this.fList[2];
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
        }
        this.fatalityInput = modDirection;
        console.log("modified: " + modDirection)
    }
    else{
        this.fatalityInput = this.fList[3 * this.selectedMove + 1]
        this.fatalityDistance = this.fList[3 * this.selectedMove + 2]
    }
    this.showFatality = true;
    this.displayMoves();
  }

  facingRight() {
    console.log("facing right");
    if(this.selectedMove === 0) {
        this.fatalityName = this.fList[0];
        this.fatalityInput = this.fList[1]
        this.fatalityDistance = this.fList[2]
    }
    else{
        this.fatalityName = this.fList[3 * this.selectedMove];
        this.fatalityInput = this.fList[3 * this.selectedMove + 1]
        this.fatalityDistance = this.fList[3 * this.selectedMove + 2]
    }
    console.log(this.fatalityInput);
    console.log(this.fatalityDistance);
    this.showFatality = true;
    this.displayMoves();
  }

  displayMoves():void {
    console.log("displaying moves");
    // for(let i=0; i<this.fatalityInput.length; i++) {
    for(let stuff in this.fatalityInput) {
        
        const img = new Image(150, 150);
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
              "food for thought", ['b', 'd', 'b', 4], 'close',
              '', [], ''
          ]
      case 'cassie cage':
          return [ 
                'i <3 u',
                ['d', 'd', 'f', 2],
                'mid'
            ,
                '',
                [],
                ''
            ]
        
      case 'cetrion':
          return [ 
                'maintaining balance',
                ['b', 'd', 'f', 'd', 2],
                'mid'
            ,
                '',
                [],
                ''
            ]
        
      case 'dvorrah':
          return [ 
                'new species',
                ['b', 'f', 'b', 1],
                'close'
            ,
                '',
                [],
                ''
            ]
        
      case 'erron black':
          return [ 
                'melted',
                ['d', 'd', 'd', 3],
                'mid'
            ,
                '',
                [],
                ''
            ]
        
      case 'geres':
          return [ 
                'phasing through time',
                ['b', 'd', 'd', 1],
                'any'
            ,
                '',
                [],
                ''
            ]
        
      case 'jacqui briggs':
          return [ 
                'spider mines',
                ['f', 'b', 'f', 1],
                'mid'
            ,
                '',
                [],
                ''
            ]
        
      case 'jade':
          return [ 
                'bow before me',
                ['d', 'd', 'f', 'd', 2],
                'any'
            ,
                '',
                [],
                ''
            ]
        
      case 'jax briggs':
          return [ 
                'coming in hot',
                ['f', 'd', 'f', 1],
                'close'
            ,
                '',
                [],
                ''
            ]
        
      case 'johnny cage':
          return [ 
                "mr cage's neighborhood",
                ['f', 'b', 'd', 'd', 2],
                ''
            ,
                '',
                [],
                ''
            ]
        
      case 'kabal':
          return [ 
                'road rash',
                ['b', 'f', 'd', 'f', 1],
                'mid'
            ,
                '',
                [],
                ''
            ]
        
      case 'kano':
          return [ 
                'last dance',
                ['f', 'd', 'd', 3],
                'close'
            ,
                '',
                [],
                ''
            ]
        
      case 'kitana':
          return [ 
                'gore-nado',
                ['d','d','d','d',3],
                ''
            ,
                '',
                [],
                ''
            ]
        
      case 'kollector':
          return [ 
                'for the kollection',
                ['d','d','d','d',2],
                'close'
            ,
                '',
                [],
                ''
            ]
        
      case 'kotal kahn':
          return [ 
                'totem sacrifice',
                ['b','d','b',1],
                'close'
            ,
                '',
                [],
                ''
            ]
        
      case 'kung lao':
          return [ 
                'headed nowhere',
                ['d','f','b','d',4],
                'close'
            ,
                '',
                [],
                ''
            ]
        
      case 'liu kang':
          return [ 
                'burn out',
                ['d','b','d','f',3],
                'close'
            ,
                '',
                [],
                ''
            ]
        
      case 'noob saibot':
          return [ 
                'split decision',
                ['b','f','b','f',2],
                'mid'
            ,
                '',
                [],
                ''
            ]
        
      case 'raiden':
          return [ 
                'alternating current',
                ['b','d','b',3],
                'mid'
            ,
                '',
                [],
                ''
            ]
        
      case 'scorpion':
          return [ 
                "you're next",
                ['b','d','d',3],
                'far'
            ,
                '',
                [],
                ''
            ]
        
      case 'skarlet':
          return [ 
                'bloody mess',
                ['f','b','d',1],
                'mid'
            ,
                '',
                [],
                ''
            ]
        
      case 'sonya':
          return [ 
                'to the choppa',
                ['d','f','b',4],
                'mid'
            ,
                '',
                [],
                ''
            ]
        
      case 'sub-zero':
          return [ 
                'ice-cutioner',
                ['b','f','b',4],
                'mid'
            ,
                '',
                [],
                ''
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