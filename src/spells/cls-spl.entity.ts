// login/login.entity.ts
import { Entity, Column, ObjectID, ObjectIdColumn, ManyToMany, JoinTable, OneToOne, JoinColumn } from 'typeorm';
import { SpellET } from './spells.entity';


@Entity('spells_classes')
export class SplClsET {
    @ObjectIdColumn() id: ObjectID;
    @Column('ObjectID') spell_id: ObjectID;
    @Column('ObjectID') class_id: ObjectID;

    @Column(type => SpellET)
    spl: SpellET[];

    // @ManyToMany(type => SpellET, spellet => spellet.cls)
    // @JoinTable()
    // spells: SpellET[];
}