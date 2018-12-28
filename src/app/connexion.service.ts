import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { WebsocketService } from './websocket.service';
import { map } from 'rxjs/operators';

const CHAT_URL = 'ws://echo.websocket.org/';

export interface Message {
	//...
}

@Injectable()
export class ConnexionService {
	public messages: Subject<Message>;

	constructor(wsService: WebsocketService) {
		this.messages = <Subject<Message>>wsService
      .connect(CHAT_URL)
      .pipe(map((response: MessageEvent): Message => {
				let data = JSON.parse(response.data);
				return data;
			}));
	}
}
