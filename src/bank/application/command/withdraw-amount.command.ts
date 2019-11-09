import { ICommand } from '@nestjs/cqrs';

export class WithdrawAmountCommand implements ICommand {
  constructor(public readonly id: string, public readonly amount: number) {}
}
