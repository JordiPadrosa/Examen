import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Monster } from '../../model/entitats/Monster';
import { user } from '../../model/services/user';

@Component({
  selector: 'app-fixa',
  templateUrl: './fixa.component.html',
  styleUrls: ['./fixa.component.css']
})
export class FixaComponent{
  monsters: Array<Monster> = [];
  monster!: Monster;
  monstersSelected: Array<Monster> = [];
  dadesMonstersSelected: Array<Monster> = [];

  constructor(private httpClient: user) { 
    this.httpClient.getMonsters().subscribe(
      response => {
        console.log(response.results);
        this.monsters = response.results;
      }
    )
  }
  getMonsterImg(monster: Monster) {
    this.monster = monster;
    this.httpClient.getMonsterByName(monster.index).subscribe(
      response => {
        if(response.image != undefined){
          this.monster.image = 'https://www.dnd5eapi.co'+response.image;
        }
      }
    )
  }
  afegirMonster(monster: Monster){
    this.monstersSelected.push(monster);
    console.log(this.monstersSelected);
  }
  getMonsterDades(){
    this.monstersSelected.forEach(monster => {
      this.httpClient.getMonsterByName(monster.index).subscribe(
        response => {
          console.log(response);
          this.dadesMonstersSelected.push(response);
        }
      )
    });
  }
}
