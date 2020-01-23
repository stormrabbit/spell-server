import { Injectable } from '@nestjs/common';
import { CreateCharactorDto } from "./dto/create-charactor.dto";
import * as mongoose from 'mongoose';
import { Charactor } from './interface/charactor.interface';
import { Model, Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { UpdateCharactorDto } from './dto/update-charactor.dto';
import { RetrieveCharactorDto } from './dto/retrieve-charactor.dto';
@Injectable()
export class CharactorService {

    constructor(
        @InjectModel('charactors') private readonly charactorModel: Model<Charactor>
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
        return await this.charactorModel.find(retrieveDto).exec();
    }

    async retrieveById(id) {
        const _id = mongoose.Types.ObjectId(id);
        return await this.charactorModel.findOne({ _id}).exec();
    }
}
