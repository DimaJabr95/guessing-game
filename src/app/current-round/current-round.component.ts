import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { Player } from '../player.model';

@Component({
  selector: 'app-current-round',
  templateUrl: './current-round.component.html',
  styleUrls: ['./current-round.component.scss']
})
export class CurrentRoundComponent implements OnInit {

  players: Player[] = [];

  constructor(public gameService: GameService) { }

  ngOnInit(): void {
    // Subscribe to game state changes
    this.gameService.playersUpdated.subscribe((players: Player[]) => {
      this.players = players;
    });
  }
}
