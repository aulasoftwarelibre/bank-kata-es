import { Inject, Injectable } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { Model } from 'mongoose';

import { CreateAccountCommand } from '../../application/command';
import { ACCOUNT_MODEL, AccountView } from '../read-model/schema';

@Injectable()
export class AccountService {
  constructor(
    private readonly commandBus: CommandBus,
    @Inject(ACCOUNT_MODEL) private readonly accountModel: Model<AccountView>,
  ) {}

  async createAccount(id: string) {
    this.commandBus.execute(new CreateAccountCommand(id));
  }

  async getAccount(id: string): Promise<AccountView> {
    return this.accountModel.findById(id).exec();
  }

  async getAccounts(): Promise<AccountView[]> {
    return this.accountModel.find().exec();
  }

  async depositAmount(id: string, amount: number) {}

  async withdrawAmount(id: string, amount: number) {}
}
