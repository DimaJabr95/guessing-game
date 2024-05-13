import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss']
})
export class GameBoardComponent implements OnInit {

  speed: number = 1;

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    // Subscribe to any necessary game state changes from the service
  }

}
