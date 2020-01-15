import { Injectable } from '@nestjs/common';
import { CreateCharactorDto } from "./dto/create-charactor.dto";

import {Charactor} from './interface/charactor.interface';
import {Model} from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { UpdateCharactorDto } from './dto/update-charactor.dto';
@Injectable()
export class CharactorService {

    constructor(
        @InjectModel('charactors') private readonly charactorModel :Model<Charactor>
    ) {}

    async createCharactor(createCharactor:CreateCharactorDto) {
        const create = new  this.charactorModel(createCharactor);
        return await create.save();
    }

    async updateCharactor(updateDto: UpdateCharactorDto ) {
        return this.charactorModel.update({_id: updateDto.id}, {$set: updateDto}).exec();
    }
}
