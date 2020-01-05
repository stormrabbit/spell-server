import { Injectable, Inject } from '@nestjs/common';
import { Spell } from './interfaces/spell.interface';
import { Class } from './interfaces/class.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SplCls } from './interfaces/spl-cls.interface';


@Injectable()
export class SpellsService {
    constructor(
        @InjectModel('spells') private readonly spellModel: Model<Spell>,
        @InjectModel('classes') private readonly classModel: Model<Class>,
        @InjectModel('spells_classes') private readonly splCsModel: Model<SplCls>,
    ) { }
 
    // 根据职业查询法术
    async findAll(cls: string): Promise<Spell> {
        const classRes = await this.classModel.findOne({ name: cls }).exec();
        if (!!classRes) {
            const id = classRes._id;
            const findSpellByClass = await this.splCsModel.find({ class_id: id }).exec();
            const spellids = findSpellByClass.map(fsbc => fsbc.spell_id);
            const noSortArray = await this.spellModel.find({ _id: { '$in': spellids } });
            return noSortArray.sort((val1:Spell,val2:Spell)=> (parseInt(val1.lvl) - parseInt(val2.lvl))); // 根据等级升序排列
        }
        return await this.spellModel.find().sort({lvl: 1}).exec();
    }

    // 模糊查询
    async findSpellsByNickName(nickname: string): Promise<Spell[]> {
        const reg = RegExp(nickname); // 使用传入的字段创建正则
        return await this.spellModel.find({ nickname: reg }).exec(); // 根据正则模糊查询
    }

    // 精确查询
    async findSpellByName(name: string): Promise<Spell> {
        return await this.spellModel.findOne({ name }).exec();
    }
}
