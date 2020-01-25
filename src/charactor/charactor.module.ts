import { Module } from '@nestjs/common';
import { CharactorController } from './charactor.controller';
import { CharactorService } from './charactor.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CharactorSchema } from './schema/charactor.schema';
import { ClassSchema } from 'src/spells/schemas/clas.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'charactors', schema: CharactorSchema },
      { name: 'classes', schema: ClassSchema },
    ]),
  ],
  controllers: [CharactorController],
  providers: [CharactorService]
})
export class CharactorModule { }
