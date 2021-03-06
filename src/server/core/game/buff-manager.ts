import { Singleton, AutoWired, Inject } from 'typescript-ioc';

import { Channel, IBuff } from '../../../shared/interfaces';
import { SubscriptionManager } from './subscription-manager';
import { PlayerManager } from './player-manager';
import { Player } from '../../../shared/models';

@Singleton
@AutoWired
export class BuffManager {
  @Inject private playerManager: PlayerManager;
  @Inject private subscriptionManager: SubscriptionManager;

  public async init() {
    this.subscribeToBuffs();
  }

  private subscribeToBuffs() {
    this.subscriptionManager.subscribeToChannel(Channel.PlayerBuff, ({ memberNames, buff, cure }) => {
      memberNames.forEach(memberName => {
        const player = this.playerManager.getPlayer(memberName);
        if(!player) return;

        if(buff) {
          player.addBuff(buff);
        }

        if(cure) {
          player.cureInjury();
        }
      });
    });
  }

  public shareBuff(player: Player, buff: IBuff): void {
    if(!player.$party) return;

    this.subscriptionManager.emitToChannel(Channel.PlayerBuff, {
      memberNames: player.$party.members.filter(x => x !== player.name),
      buff
    });
  }

  public cureInjury(player: Player): void {
    if(!player.$party) return;

    this.subscriptionManager.emitToChannel(Channel.PlayerBuff, {
      memberNames: player.$party.members.filter(x => x !== player.name),
      cure: true
    });
  }

}
