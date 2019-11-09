import { AccountWasCreated } from './account-was-created.event';

export { AccountWasCreated };

export const BankEventHandlers = {
  AccountWasCreated: (id: string) => new AccountWasCreated(id),
};
