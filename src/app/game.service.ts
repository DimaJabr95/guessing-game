import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
// import { Player } from './player.model';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  currentRound: number = 1;
  players: Player[] = [];
  ranking: Player[] = [];
  multiplier: number = 1;
  speed: number = 1;

   // Subject to emit updates when the list of players changes
   playersUpdated = new Subject<Player[]>();


  constructor() { }

  startNewRound() {
    this.currentRound++;
    this.multiplier = 1;
    this.players = [];
    // Generate auto-players
    for (let i = 0; i < 4; i++) {
      const autoPlayer = new Player('Auto Player ' + (i + 1), Math.floor(Math.random() * 100) + 1); // Random guess for multiplier
      this.players.push(autoPlayer);
    }
  }


  submitGuess(points: number, multiplier: number) {
    const player = new Player('Player', multiplier);
    player.points = points;
    this.players.push(player);
    // Calculate points for each player
    this.players.forEach(player => {
      if (player.multiplier === this.multiplier) {
        player.totalPoints += player.points * this.multiplier;
      } else {
        player.totalPoints -= player.points;
      }
    });
    // Sort players based on total points
    this.ranking = this.players.slice().sort((a, b) => b.totalPoints - a.totalPoints);
    this.emitPlayersUpdate(); // Notify components that the list of players has been updated
  }

  private emitPlayersUpdate() {
    // Emit the updated list of players
    this.playersUpdated.next(this.players.slice());
  }
}

class Player {
  constructor(public name: string, public multiplier: number, public points: number = 0, public totalPoints: number = 0) {}
}
