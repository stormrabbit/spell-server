import { Module } from '@nestjs/common';
import { CharactorController } from './charactor.controller';
import { CharactorService } from './charactor.service';
import {MongooseModule} from '@nestjs/mongoose';
import {CharactorSchema} from './charactor.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'charactors', schema: CharactorSchema }]),
  ],
  controllers: [CharactorController],
  providers: [CharactorService]
})
export class CharactorModule {}
