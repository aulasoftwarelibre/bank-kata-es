import { Connection } from 'mongoose';

import { DATABASE_CONNECTION } from '../../core/database';
import { ACCOUNTS } from '../domain/repository';
import { ACCOUNT_MODEL, AccountSchema } from './read-model/schema';
import { AccountsEventStore } from './repository';

export const BankProviders = [
  {
    provide: ACCOUNT_MODEL,
    useFactory: (connection: Connection) =>
      connection.model('Account', AccountSchema),
    inject: [DATABASE_CONNECTION],
  },
  {
    provide: ACCOUNTS,
    useClass: AccountsEventStore,
  },
];
