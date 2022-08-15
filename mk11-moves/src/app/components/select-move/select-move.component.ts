import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FatalityList } from 'src/assets/fatality-list';

@Component({
  selector: 'app-select-move',
  templateUrl: './select-move.component.html',
  styleUrls: ['./select-move.component.css']
})
export class SelectMoveComponent implements OnInit {

  constructor(public router: Router, public route: ActivatedRoute) { }

  currentCharacter:any;
  fList:any;
  allMovesForCharacter:string[] = [];

  ngOnInit(): void {
    this.route.queryParams.subscribe(
        params => {
          this.currentCharacter = params.char;
          console.log(this.currentCharacter);
        })
        this.fList = this.getFatalityList(this.currentCharacter);
        for(let i = 0; i < this.fList.length; i++) {
            if(i%3 === 0) {
                this.allMovesForCharacter.push(this.fList[i]);
            }
        }
  }

    goToDirectionPage(num:number) {
      this.router.navigate(["/fatality/"],
         {queryParams: {char:this.currentCharacter, fat:num}});
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
              'close',
              'rock, paper, baraka', 
              ['b', 'f', 'b', 1], 
              'close',
          ]
      case 'cassie cage':
          return [
                'i <3 u',
                ['d', 'd', 'f', 2],
                'mid',
                '#GirlPower',
                ['b', 'd', 'd','b', 4],
                'mid'
            ]

      case 'cetrion':
          return [
                'maintaining balance',
                ['b', 'd', 'f', 'd', 2],
                'mid',
                'good and evil',
                ['b','d', 'b', 1],
                'mid'
            ]

      case 'dvorrah':
          return [
                'new species',
                ['b', 'f', 'b', 1],
                'close',
                "can't die",
                ['b', 'd', 'd', 2],
                'mid'
            ]

      case 'erron black':
          return [
                'melted',
                ['d', 'd', 'd', 3],
                'mid',
                'death trap',
                ['d', 'f', 'd', 4],
                'mid'
            ]
            
      case 'frost':
        return [
              'ice sculpture',
              ['f', 'b', 'd', 1],
              'close',
              'the cyber initiative',
              ['b', 'f', 'd', 'f', 2],
              'mid'
          ]

      case 'geres':
          return [
                'phasing through time',
                ['b', 'd', 'd', 1],
                'any',
                'peeling back',
                ['d', 'f', 'b', 3],
                'close'
            ]

      case 'jacqui briggs':
          return [
                'spider mines',
                ['f', 'b', 'f', 1],
                'mid',
                "nothin' but neck",
                ['b', 'f', 'b', 2],
                'mid'
            ]

      case 'jade':
          return [
                'bow before me',
                ['d', 'd', 'f', 'd', 2],
                'any',
                'pole dance',
                ['b', 'f', 'd', 'f', 3],
                'close'
            ]

      case 'jax briggs':
          return [
                'coming in hot',
                ['f', 'd', 'f', 1],
                'close',
                'still got it',
                ['b', 'f', 'b', 'd', 3],
                'close'
            ]

      case 'johnny cage':
          return [
                "mr cage's neighborhood",
                ['f', 'b', 'd', 'd', 2],
                'close',
                'who hired this guy',
                ['f', 'd', 'f', 3],
                'close'
            ]

      case 'kabal':
          return [
                'road rash',
                ['b', 'f', 'd', 'f', 1],
                'mid',
                'hooked',
                ['d', 'd', 'd', 2],
                'close'
            ]

      case 'kano':
          return [
                'last dance',
                ['f', 'd', 'd', 3],
                'close',
                'face like a dropped pie',
                ['b', 'd', 'f', 4],
                'close'
            ]

      case 'kitana':
          return [
                'gore-nado',
                ['d','d','d','d', 3],
                'mid',
                'royal execution',
                ['d', 'b', 'f', 3],
                'mid'
            ]

      case 'kollector':
          return [
                'for the kollection',
                ['d','d','d','d',2],
                'close',
                'head lantern',
                ['d', 'f', 'd', 3],
                'close'
            ]

      case 'kotal kahn':
          return [
                'totem sacrifice',
                ['b','d','b',1],
                'close',
                'kat food',
                ['b', 'f', 'b', 'f', 3],
                'close'
            ]

      case 'kung lao':
          return [
                'headed nowhere',
                ['d','f','b','d',4],
                'close',
                'meat slicer',
                ['d', 'f', 'd', 1],
                'close'
            ]

      case 'liu kang':
          return [
                'burn out',
                ['d','b','d','f',3],
                'close',
                'belly of the beast',
                ['b', 'd', 'b', 'f', 4],
                'mid'
            ]

      case 'noob saibot':
          return [
                'split decision',
                ['b','f','b','f',2],
                'mid',
                'split decision',
                ['d', 'd', 'd', 3],
                '3'
            ]

      case 'raiden':
          return [
                'alternating current',
                ['b','d','b',3],
                'mid',
                'direct current',
                ['d', 'f', 'b', 1],
                'close'
            ]

      case 'scorpion':
          return [
                "you're next",
                ['b','d','d',3],
                'far',
                'chain reaction',
                ['d', 'f', 'b', 4],
                'far'
            ]

      case 'skarlet':
          return [
                'bloody mess',
                ['f','b','d',1],
                'mid',
                'heart condition',
                ['d', 'd', 'f', 2],
                'far'
            ]

        case 'shao kahn':
            return [
                    'back blown out',
                    ['b', 'f', 'd', 'd', 4],
                    'mid',
                    'Kahn-Sequences',
                    ['b', 'f', 'b', 3],
                    'close'
                  ]

      case 'sonya':
          return [
                'to the choppa',
                ['d','f','b',4],
                'mid',
                'supply drop',
                ['b', 'f', 'd', 1],
                'close'
            ]

      case 'sub-zero':
          return [
                'ice-cutioner',
                ['b','f','b', 4],
                'mid',
                'frozen in time',
                ['f', 'd', 'f', 2],
                'mid'
            ]
            default: return ''
          }
        }
      }
