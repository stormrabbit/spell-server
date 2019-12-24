// login/login.entity.ts
import { Entity, Column, ObjectID, ObjectIdColumn, ManyToMany, JoinTable } from 'typeorm';
import { ClassET } from './cls.entity';

@Entity('spells')
export class SpellET {
  @ObjectIdColumn() _id: ObjectID;
  @Column() name: string;
  @Column() nickname: string;
}