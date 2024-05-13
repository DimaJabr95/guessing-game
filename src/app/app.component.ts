import { GameService } from './game.service';
import { Component, OnInit } from '@angular/core';
import { Player } from './player.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})

export class AppComponent implements OnInit{


  constructor (private _gameService: GameService) {

  }

  title = 'guessing-game-app';
   players: Player[] = []; // Array to store active players of the current round
   multiplier: number = 1;
   totalPoints: number =1;
   points: number =1;
   ranking: Player[] = []; // Array to store total ranking of all players

  ngOnInit(): void {



  }




}



