import { Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { ACCOUNTS, Accounts } from '../../domain/repository';
import { DepositAmountCommand } from './deposit-amount.command';

@CommandHandler(DepositAmountCommand)
export class DepositAmountHandler
  implements ICommandHandler<DepositAmountCommand> {
  constructor(@Inject(ACCOUNTS) private readonly accounts: Accounts) {}

  async execute(command: DepositAmountCommand) {}
}
