// login/login.entity.ts
import { Entity, Column, ObjectID, ObjectIdColumn, ManyToMany, JoinTable } from 'typeorm';
import { ClassET } from './cls.entity';

@Entity('spells')
export class SpellET {
  @ObjectIdColumn() _id: ObjectID;
  @Column() nickname: string;
  @Column() school: string;
  @Column() time: string;
  @Column() range: string;
  @Column() material: string;
  @Column() describe: string;
  @Column() upgrade: string;
}