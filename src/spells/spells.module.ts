import { Module } from '@nestjs/common';
import { SpellsController } from './spells.controller';
import { SpellsService } from './spells.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SpellSchema } from './schemas/spell.schema';
import { DatabaseModule } from '../database/database.module';
import { spellsProviders } from './spells.providers';
@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'spells', schema: SpellSchema }]),
        DatabaseModule,
    ],
    controllers: [SpellsController],
    providers: [...spellsProviders, SpellsService],
})
export class SpellsModule { }
