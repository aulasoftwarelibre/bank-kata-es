import { Module, OnModuleInit } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';

import { DatabaseModule } from '../../core/database';
import { EventStore, EventStoreModule } from '../../core/eventstore';
import { BankCommandHandlers } from '../application/command';
import { BankEventHandlers } from '../domain/event';
import { BankProviders } from './bank.providers';
import { BankConsoleCommands } from './console';
import { BankControllers } from './controller';
import { BankProjectionHandlers } from './read-model/projection';
import { BankRepositories } from './repository';
import { BankServices } from './service';

@Module({
  controllers: [...BankControllers],
  imports: [CqrsModule, DatabaseModule, EventStoreModule.forRoot()],
  providers: [
    ...BankCommandHandlers,
    ...BankConsoleCommands,
    ...BankProviders,
    ...BankProjectionHandlers,
    ...BankRepositories,
    ...BankServices,
  ],
})
export class BankModule implements OnModuleInit {
  constructor(private readonly eventStore: EventStore) {}

  onModuleInit() {
    this.eventStore.addEventHandlers(BankEventHandlers);
  }
}
