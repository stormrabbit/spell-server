// login/login.providers.ts
import { Connection, getMongoRepository } from 'typeorm';
import { SpellET } from './spells.entity';
import {ClassET } from './cls.entity';
import { SplClsET } from './cls-spl.entity';

export const spellsProviders = [
  {
    // Token可以自己设定
    provide: 'LoginRepositoryToken',
    // User是entity定义的数据实体
    useFactory: (connection: Connection) => connection.getMongoRepository(SpellET),
    inject: ['DbConnectionToken'],
  },
  {
    // Token可以自己设定
    provide: 'ClassRepositoryToken',
    // User是entity定义的数据实体
    useFactory: (connection: Connection) => connection.getMongoRepository(ClassET),
    inject: ['DbConnectionToken'],
  },
  {
    // Token可以自己设定
    provide: 'SplClsRepositoryToken',
    // User是entity定义的数据实体
    useFactory: (connection: Connection) => connection.getMongoRepository(SplClsET),
    inject: ['DbConnectionToken'],
  },
];