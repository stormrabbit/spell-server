// database/database.providers.ts
import { createConnection } from 'typeorm';

export const databaseProviders = [
  {
    // Token可以自己设定
    provide: 'DbConnectionToken',
    useFactory: async () =>
      await createConnection({
        type: 'mongodb',
        host: '127.0.0.1',
        port: 27017,
        database: 'dnd_spells',
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      }),
  },
];