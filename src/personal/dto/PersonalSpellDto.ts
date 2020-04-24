import mongoose from 'mongoose';
import { Spell } from 'src/spells/interfaces/spell.interface';

export class PersonalSpellDto {
    id: mongoose.Types.ObjectId
    readonly name: String;
    readonly lvl: String;
    readonly nickname: String;
}