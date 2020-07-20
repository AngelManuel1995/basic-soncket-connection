import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  public text: ''
  constructor( public chatService:ChatService ) { }

  ngOnInit(): void {
  }

  sendMessage(){
    console.log(this.text)
    this.chatService.sendMessage(this.text)
    this.text = ''
  }
}
