import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-player-input',
  templateUrl: './player-input.component.html',
  styleUrls: ['./player-input.component.scss']
})
export class PlayerInputComponent {
  points : any
  multiplier : any

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    // Initialize any necessary variables or subscribe to game state changes
  }

  submitGuess() {
    // Validate inputs
    if (this.points && this.multiplier) {
      // Call a method in the game service to submit the guess
      this.gameService.submitGuess(this.points, this.multiplier);
      // Clear input fields
      this.points = null;
      this.multiplier = null;
    } else {
      // Handle invalid inputs (optional)
    }
  }


}
