import { Injectable } from '@nestjs/common';
import { CreateCharactorDto } from './create-charactor.dto';

import {Charactor} from './charactor.interface';
import {Model} from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
@Injectable()
export class CharactorService {

    constructor(
        @InjectModel('charactors') private readonly charactorModel :Model<Charactor>
    ) {}

    async createCharactor(createCharactor:CreateCharactorDto) {
        const create = new  this.charactorModel(createCharactor);
        return await create.save();
    }
}
