import { Injectable } from '@nestjs/common';
import { Spell } from './interfaces/spell.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
@Injectable()
export class SpellsService {
    constructor(@InjectModel('spells') private readonly spellModel: Model<Spell>) { }
    private readonly spells: Spell[] = [];

    async findAll(cls: string): Promise<Spell[]> {
        // return await this.spellModel.find().exec();
        return await this.spellModel.find().exec();
    }

    async findSpellsByNickName(nickname: string): Promise<Spell[]> {
        const reg =  RegExp(nickname);
        return await this.spellModel.find({ nickname: reg}).exec();
    }

    async findSpellByName(name: string): Promise<Spell> {
        return await this.spellModel.findOne({ name }).exec();
    }
}
