
import { LoggerTimer } from 'logger-timer';

import { ServerEventName, IPlayer } from '../interfaces';
import { Game } from '../../server/core/game/game';
import { Player } from './entity';

export class ServerSocketEvent {
  protected timer: LoggerTimer;

  protected get playerName(): string {
    return this.socket.playerName;
  }

  protected get player(): Player {
    return this.game.playerManager.getPlayer(this.playerName);
  }

  protected emit(event: ServerEventName, data: any = { }) {
    this.socket.emit('gameevent', { name: event, data });
  }

  protected notConnected() {
    this.emit(ServerEventName.GameMessage, { message: 'You aren\'t yet logged back in. Try again in a moment.' });
  }

  protected gameSuccess(err: string) {
    this.emit(ServerEventName.GameMessage, { message: err, type: 'success' });
  }

  protected gameError(err: string) {
    this.emit(ServerEventName.GameMessage, { message: err, type: 'danger' });
  }

  protected gameWarning(err: string) {
    this.emit(ServerEventName.GameMessage, { message: err, type: 'warning' });
  }

  protected gameMessage(err: string) {
    this.emit(ServerEventName.GameMessage, { message: err });
  }

  protected socketAddress() {
    return this.socket.request.headers['x-forwarded-for'];
  }

  protected setPlayer(player: IPlayer) {
    if(!player) {
      this.socket.playerName = null;
      return;
    }

    this.socket.playerName = player.name;
  }

  constructor(protected game: Game, private socket) { }
}
