import { Injectable } from '@angular/core';
import { FatalityList } from './assets/fatality-list';

@Injectable({
  providedIn: 'root'
})
export class MoveService {

  constructor() { }

  getFighters() {
    return ['baraka', 'cassie cage', 'cetrion', 'dvorrah','erron black', 'frost', 'geres', 'jacqui briggs', 'jade', 'jax briggs', 'johnny cage', 'kabal', 'kano', 'kitana', 'kollector', 'kotal kahn', 'kung lao', 'liu kang', 'mileena', 'noob saibot', 'raiden', 'scorpion', 'shao kahn', 'skarlet', 'sonya', 'sub-zero']
  }

  getMoves(char: string)  {
    let fList = new FatalityList();
    return fList[char as keyof typeof fList];
  }
}

