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
  imatge: boolean = false;

  constructor(private httpClient: user) { 
    this.httpClient.getMonsters().subscribe(
      response => {
        console.log(response.results);
        this.monsters = response.results;
      }
    )
  }
  getMonsterImg(url: string) {

    return url;
  }
}
