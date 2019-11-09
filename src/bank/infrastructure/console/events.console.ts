import { Inject } from '@nestjs/common';
import { EventBus } from '@nestjs/cqrs';
import { Event, TCPClient } from 'geteventstore-promise';
import { Model } from 'mongoose';
import { Command, Console, ConsoleService } from 'nestjs-console';

import { BankEventHandlers } from '../../domain/event';
import { ACCOUNT_MODEL, AccountView } from '../read-model/schema';

@Console({
  name: 'events',
})
export class EventsConsoleCommands {
  constructor(
    @Inject(ACCOUNT_MODEL) private readonly accountModel: Model<AccountView>,
    private readonly eventBus: EventBus,
    private readonly client: TCPClient,
  ) {}
  @Command({
    command: 'list',
  })
  async list(): Promise<void> {
    const spin = ConsoleService.createSpinner();
    spin.start('Listing files');

    const events = await this.client.getEvents('$ce-bank');

    spin.succeed('Listing done');
    const eventHandlers = BankEventHandlers;

    events.forEach((event: Event) => {
      const { eventType, data } = event;

      const message = eventHandlers[eventType](...Object.values(data));
      console.log(message);
    });

    process.exit(0);
  }
}
