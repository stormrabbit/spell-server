import { Injectable, Inject } from '@nestjs/common';
import { Spell } from './interfaces/spell.interface';
import { SpellET } from './spells.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MongoRepository } from 'typeorm';


@Injectable()
export class SpellsService {
    constructor(@InjectModel('spells') private readonly spellModel: Model<Spell>,

        // Token要对应
        @Inject('LoginRepositoryToken')
        private readonly loginRepository: MongoRepository<SpellET>,
    ) { }
    private readonly spells: Spell[] = [];

    async findAll(cls: string): Promise<SpellET[]> {
        return await this.loginRepository.find();
        // return await this.spellModel.find().exec();
        // return await this.spellModel.aggregate([{
        //     $lookup: { // 左连接
        //       from: "spells", // 关联到 spells 表
        //       localField: "spell_id", // spells_classes 表关联的字段
        //       foreignField: "_id", // spells 表关联的字段
        //       as: "spell"
        //     }
        //   }, {
        //     $lookup: { // 左连接
        //       from: "classes", // 关联到 classes 表
        //       localField: "class_id", // spells_classes 表关联的字段
        //       foreignField: "_id", // class 表关联的字段
        //       as: "class"
        //     }
        //   },{
        //     $unwind: { // 拆分子数组
        //       path: "$spell",
        //       preserveNullAndEmptyArrays: true // 空的数组也拆分
        //     }
        //   },{
        //     $unwind: { // 拆分子数组
        //       path: "$class",
        //       preserveNullAndEmptyArrays: true // 空的数组也拆分
        //     }
        //   }
        //   ]);
    }

    async findSpellsByNickName(nickname: string): Promise<Spell[]> {
        const reg = RegExp(nickname); // 使用传入的字段创建正则
        return await this.spellModel.find({ nickname: reg }).exec(); // 根据正则模糊查询
    }

    async findSpellByName(name: string): Promise<Spell> {
        return await this.spellModel.findOne({ name }).exec();
    }
}
