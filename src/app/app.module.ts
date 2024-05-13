import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameBoardComponent } from './game-board/game-board.component';
import { PlayerInputComponent } from './player-input/player-input.component';
import { CurrentRoundComponent } from './current-round/current-round.component';
import { RankingComponent } from './ranking/ranking.component';
import { ChatComponent } from './chat/chat.component';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    GameBoardComponent,
    PlayerInputComponent,
    CurrentRoundComponent,
    RankingComponent,
    ChatComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FlexLayoutModule,

  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
