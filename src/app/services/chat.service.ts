import { Injectable } from '@angular/core';
import { WebsocketService } from './websocket.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(public wsService:WebsocketService) { 

  }

  sendMessage(body) {
    console.log('Emiting menssage')
    const payload = {
      de:'Angel Manuel Góez Giraldo',
      body
    }
    this.wsService.emit('message', payload)
  }
}
