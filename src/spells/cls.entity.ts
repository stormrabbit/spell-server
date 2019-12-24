// login/login.entity.ts
import { Entity, Column, ObjectID, ObjectIdColumn, ManyToMany, JoinTable } from 'typeorm';
import { SpellET } from './spells.entity';


@Entity('classes')
export class ClassET {
    @ObjectIdColumn() id: ObjectID;
    @Column() name: string;
    @Column() nickname: string;

    // @ManyToMany(type => SpellET, spellet => spellet.cls)
    // @JoinTable()
    // spells: SpellET[];
}