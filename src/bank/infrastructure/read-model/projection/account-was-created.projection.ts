import { Inject } from '@nestjs/common';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { Model } from 'mongoose';

import { AccountWasCreated } from '../../../domain/event';
import { ACCOUNT_MODEL, AccountView } from '../schema';

@EventsHandler(AccountWasCreated)
export class AccountWasCreatedProjection
  implements IEventHandler<AccountWasCreated> {
  constructor(
    @Inject(ACCOUNT_MODEL) private readonly accountModel: Model<AccountView>,
  ) {}

  async handle(event: AccountWasCreated) {
    const accountView = new this.accountModel({
      _id: event.id,
    });

    return await accountView.save();
  }
}
