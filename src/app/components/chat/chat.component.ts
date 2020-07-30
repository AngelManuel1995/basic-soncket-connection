import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  public text: ''
  public messages: Array<any> = []
  public messagesContainerElement: HTMLElement
  constructor( public chatService:ChatService ) { }

  ngOnInit(): void {
    this.messagesContainerElement = document.getElementById('chat-messages-container')
    this.chatService.getMessage().subscribe((message:any) => {
      this.messages.push(message)
      setTimeout(() => {
        this.messagesContainerElement.scrollTop = this.messagesContainerElement.scrollHeight
      }, 50);
    })
  }

  sendMessage(){
    if(this.text.trim().length === 0){
      return
    }
    this.chatService.sendMessage(this.text)
    this.text = ''
  }
}
