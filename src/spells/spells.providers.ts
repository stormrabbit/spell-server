// login/login.providers.ts
import { Connection, getMongoRepository } from 'typeorm';
import { SpellET } from './spells.entity';

export const spellsProviders = [
  {
    // Token可以自己设定
    provide: 'LoginRepositoryToken',
    // User是entity定义的数据实体
    useFactory: (connection: Connection) => connection.getMongoRepository(SpellET),
    inject: ['DbConnectionToken'],
  },
];