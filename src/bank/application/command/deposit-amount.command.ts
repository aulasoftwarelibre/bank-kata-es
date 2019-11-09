import { ICommand } from '@nestjs/cqrs';

export class DepositAmountCommand implements ICommand {
  constructor(public readonly id: string, public readonly amount: number) {}
}
