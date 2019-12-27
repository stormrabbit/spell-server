import { Module } from '@nestjs/common';
import {ClassesController} from './classes.controller';
import { ClassesService } from './classes.service';
import {MongooseModule} from '@nestjs/mongoose';
import {ClassSchema} from './../spells/schemas/clas.schema';
@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'classes', schema: ClassSchema }]),
    ],
    controllers: [ClassesController],
    providers: [ClassesService]
})
export class ClassesModule {}
