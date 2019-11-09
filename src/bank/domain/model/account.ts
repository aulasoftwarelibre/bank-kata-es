import { AggregateRoot } from '../../../core/domain';
import { AccountWasCreated } from '../event';
import { AccountId } from './account-id';
import { Amount } from './amount';

export class Account extends AggregateRoot {
  private _accountId: AccountId;
  private _balance: Amount;

  private constructor() {
    super();
  }

  static add(accountId: AccountId): Account {
    const account = new Account();

    account.apply(new AccountWasCreated(accountId.value));

    return account;
  }

  id(): AccountId {
    return this._accountId;
  }

  balance(): Amount {
    return this._balance;
  }

  private onAccountWasCreated(event: AccountWasCreated) {
    this._accountId = AccountId.with(event.id);
    this._balance = Amount.with(0);
  }

  public aggregateId(): string {
    return this._accountId.value;
  }
}
