import { Global, Module } from '@nestjs/common';

import { BankModule } from './bank/infrastructure/bank.module';
import { BootstrapModule } from './bootstrap.module';

@Global()
@Module({
  imports: [BootstrapModule, BankModule],
})
export class AppModule {}
