import { Module } from '@nestjs/common';
import { SpellsController } from './spells/spells.controller';
import { SpellsModule } from './spells/spells.module';
import { MongooseModule } from '@nestjs/mongoose';
// import { ClassesController } from './classes/classes.controller';
// import { ClassesService } from './classes/classes.service';
import { ClassesModule } from './classes/classes.module';
import { CharactorModule } from './charactor/charactor.module';
import { PersonalModule } from './personal/personal.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/dnd_spells'),
    SpellsModule,
    ClassesModule,
    CharactorModule,
    PersonalModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
