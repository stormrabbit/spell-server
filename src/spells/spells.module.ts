import { Module } from '@nestjs/common';
import { SpellsController } from './spells.controller';
import { SpellsService } from './spells.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SpellSchema } from './schemas/spell.schema';
import {ClassSchema} from './schemas/clas.schema';
import { SplClsSchema } from './schemas/spl-cls.schema';
@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'spells', schema: SpellSchema }]),
        MongooseModule.forFeature([{ name: 'classes', schema: ClassSchema }]),
        MongooseModule.forFeature([{ name: 'spells_classes', schema: SplClsSchema }]),
    ],
    controllers: [SpellsController],
    providers: [SpellsService],
})
export class SpellsModule { }
