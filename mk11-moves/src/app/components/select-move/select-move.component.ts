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

  ngOnInit(): void {
    this.route.queryParams.subscribe(
        params => {
          this.currentCharacter = params.char;
          console.log(this.currentCharacter);
        })
        this.fList = this.getFatalityList(this.currentCharacter);
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
