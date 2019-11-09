import uuid = require('uuid');
import { version } from 'uuid-validate';

import { Id } from '../../../core/domain';

export class AccountId extends Id {
  static generate(): AccountId {
    return new AccountId(uuid.v4());
  }

  static with(id: string): AccountId {
    if (version(id) !== 4) {
      throw new Error('Invalid Id');
    }

    return new AccountId(id);
  }

  get value(): string {
    return this.props.value;
  }
}
