import { connect, Mongoose } from 'mongoose';
import { ConfigService } from 'nestjs-config';

export const DATABASE_CONNECTION = 'DATABASE_CONNECTION';

export const DatabaseProvider = [
  {
    provide: DATABASE_CONNECTION,
    useFactory: async (config: ConfigService): Promise<Mongoose> =>
      connect(
        config.get('database').url,
        { useNewUrlParser: true, useUnifiedTopology: true },
      ),
    inject: [ConfigService],
  },
];
