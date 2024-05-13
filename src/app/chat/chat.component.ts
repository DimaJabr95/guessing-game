import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})

export class ChatComponent implements OnInit{

  messages: string[] = [];
  newMessage: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  sendMessage() {
    if (this.newMessage.trim() !== '') {
      this.messages.push(this.newMessage.trim());
      this.newMessage = '';
    }
  }

}
