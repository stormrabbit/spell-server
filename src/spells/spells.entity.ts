// login/login.entity.ts
import { Entity, Column, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity('spells')
export class SpellET {
  @ObjectIdColumn() id: ObjectID;
  @Column() name: string;
  @Column() nickname: string;
}