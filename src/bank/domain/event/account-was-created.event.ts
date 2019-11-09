import { DomainEvent } from '../../../core/domain';

export class AccountWasCreated implements DomainEvent {
  constructor(public readonly id: string) {}
}
