import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { Player } from '../player.model';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss']
})

export class RankingComponent implements OnInit {

  ranking: Player[] = [];

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    // Subscribe to game state changes
    this.gameService.playersUpdated.subscribe((players: Player[]) => {
      this.ranking = players.slice().sort((a, b) => b.totalPoints - a.totalPoints);
    });
  }

}
