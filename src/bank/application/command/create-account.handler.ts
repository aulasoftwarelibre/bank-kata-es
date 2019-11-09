import { Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { Account, AccountId } from '../../domain/model';
import { ACCOUNTS, Accounts } from '../../domain/repository';
import { CreateAccountCommand } from './create-account.command';

@CommandHandler(CreateAccountCommand)
export class CreateAccountHandler
  implements ICommandHandler<CreateAccountCommand> {
  constructor(@Inject(ACCOUNTS) private readonly accounts: Accounts) {}

  async execute(command: CreateAccountCommand) {
    const account = Account.add(AccountId.with(command.accountId));

    this.accounts.save(account);
  }
}
