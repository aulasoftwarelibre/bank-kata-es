import { Account, AccountId } from '../model';

export interface Accounts {
  find(accountId: AccountId): Promise<Account> | null;
  save(account: Account): void;
  nextIdentity(): AccountId;
}

export const ACCOUNTS = 'ACCOUNTS';
