import { Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { ACCOUNTS, Accounts } from '../../domain/repository';
import { WithdrawAmountCommand } from './withdraw-amount.command';

@CommandHandler(WithdrawAmountCommand)
export class WithdrawAmountHandler
  implements ICommandHandler<WithdrawAmountCommand> {
  constructor(@Inject(ACCOUNTS) private readonly accounts: Accounts) {}

  async execute(command: WithdrawAmountCommand) {}
}
