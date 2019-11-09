import { Injectable } from '@nestjs/common';
import { EventPublisher } from '@nestjs/cqrs';

import { EventStore } from '../../../core/eventstore';
import { Account, AccountId } from '../../domain/model';
import { Accounts } from '../../domain/repository';

@Injectable()
export class AccountsEventStore implements Accounts {
  constructor(
    private readonly eventStore: EventStore,
    private readonly publisher: EventPublisher,
  ) {}

  async find(accountId: AccountId): Promise<Account> {
    return this.eventStore.read(Account, accountId.value);
  }

  save(account: Account): void {
    account = this.publisher.mergeObjectContext(account);
    account.commit();
  }

  nextIdentity(): AccountId {
    return AccountId.generate();
  }
}
