import { Injectable, Inject } from '@nestjs/common';
import { Spell } from './interfaces/spell.interface';
import { SpellET } from './spells.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MongoRepository , getMongoManager, getMongoRepository, ObjectID} from 'typeorm';
import { ClassET } from './cls.entity';
import { SplClsET } from './cls-spl.entity';


@Injectable()
export class SpellsService {
    constructor(@InjectModel('spells') private readonly spellModel: Model<Spell>,

        // Token要对应
        @Inject('LoginRepositoryToken')
        private readonly spellRepository: MongoRepository<SpellET>,
        @Inject('ClassRepositoryToken')
        private readonly classRepository: MongoRepository<ClassET>,
        @Inject('SplClsRepositoryToken')
        private readonly splclsRepository: MongoRepository<SplClsET>,
    ) { }
    private readonly spells: Spell[] = [];

    async findAll(cls: string) {
        const manager =  getMongoManager();
        const spR = getMongoRepository(SpellET);
        const clsET:ClassET = await this.classRepository.findOne({name: 'wizard'});

        console.log(clsET.id);
        // const id = clsET.id.toString();
        // console.log(id);
        const res = await this.splclsRepository.find({class_id: clsET.id});
        // const _id = res[0].spell_id;
        // console.log(_id);
        // return await this.loginRepository.find({_id});
        const really = Promise.all(res.map( async (rs) =>  {
            const temp = await this.spellRepository.findOne({_id: rs.spell_id});
            // console.log(temp);
            return temp;
        })); 
        console.log(really);
        return really;
        // return await this.classRepository.find();
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
