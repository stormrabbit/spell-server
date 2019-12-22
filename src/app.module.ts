import { Module } from '@nestjs/common';
import { SpellsController } from './spells/spells.controller';
import { SpellsModule } from './spells/spells.module';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [SpellsModule,
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/dnd_spells')
  ],
})
export class AppModule { }
