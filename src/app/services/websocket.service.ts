import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  private isSocketConnected:Boolean = false
  constructor(public socket:Socket) { 
    this.checkStatus()
  }

  public checkStatus () {
    console.log('Ejecución de la función')
    this.socket.on('connect', () => {
      console.log('Connected')
      this.setSocketStatus(true)
    })

    this.socket.on('disconnect', () => {
      console.log('Disconnected')
      this.setSocketStatus(false)
    })
  }

  emit (event:string, payload?:any, callback?: Function) {
    this.socket.emit(event, payload, callback)
  }

  on (event:string) {
    return this.socket.fromEvent( event )
  }

  getStatusSocket () {
    return this.isSocketConnected
  }

  setSocketStatus (status:Boolean) {
    this.isSocketConnected = status
  }

}
