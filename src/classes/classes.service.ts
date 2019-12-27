import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {Class} from './../spells/interfaces/class.interface';
@Injectable()
export class ClassesService {

    constructor(
        @InjectModel('classes') private readonly classModel: Model<Class>, ) { }
    async findAllClass() {
        return await this.classModel.find().exec();
    }
}
