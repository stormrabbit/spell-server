import { Injectable } from '@nestjs/common';
import { CreateCharactorDto } from "./dto/create-charactor.dto";
import * as mongoose from 'mongoose';
import { Charactor } from './interface/charactor.interface';
import { Model, Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { UpdateCharactorDto } from './dto/update-charactor.dto';
import { RetrieveCharactorDto } from './dto/retrieve-charactor.dto';
import { Class } from 'src/spells/interfaces/class.interface';
import { async } from 'rxjs/internal/scheduler/async';
import { RetrieveResDto } from './dto/retrieve-res-charactor.dto';
@Injectable()
export class CharactorService {

    constructor(
        @InjectModel('charactors') private readonly charactorModel: Model<Charactor>,
        @InjectModel('classes') private readonly classesModel: Model<Class>,
    ) { }

    async createCharactor(createCharactor: CreateCharactorDto) {
        createCharactor._id = Types.ObjectId();
        const create = new this.charactorModel(createCharactor);
        return await create.save();
    }

    async updateCharactor(updateDto: UpdateCharactorDto) {
        return await this.charactorModel.update({ _id: updateDto.id }, { $set: updateDto }).exec();
    }

    async retrieveList(retrieveDto: RetrieveCharactorDto) {
        const charactors: Charactor[] =  await this.charactorModel.find(retrieveDto).sort({_id: -1}).exec();
        const _self = this;
        return await  Promise.all(charactors.map(async (ch:Charactor) =>  {
            const cls = await _self.classesModel.findOne({nickname: ch.cls}).exec();
            return new RetrieveResDto(ch, cls);
        })) ;
    }

    async retrieveById(id) {
        const _id = mongoose.Types.ObjectId(id);
        return await this.charactorModel.findOne({ _id}).exec();
    }
}
