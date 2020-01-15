import { Controller, Post, Body, Put, Param } from '@nestjs/common';
import { CharactorService } from './charactor.service';
import { CreateCharactorDto } from "./dto/create-charactor.dto";
import {UpdateCharactorDto} from './dto/update-charactor.dto';
import * as mongoose from 'mongoose';
@Controller('charactor')
export class CharactorController {

    constructor(
        private readonly charactorService: CharactorService,
    ){}

    @Post('create')
    async createCharactor(@Body() createCharactorDto: CreateCharactorDto) {
        return await this.charactorService.createCharactor(createCharactorDto);
    }

    @Put('update/:id')
    async updateCharactorById(@Param('id') id: String, @Body() updateDto:UpdateCharactorDto) {
        updateDto.id = mongoose.Types.ObjectId(id);
        return await this.charactorService.updateCharactor(updateDto);
    }

}
