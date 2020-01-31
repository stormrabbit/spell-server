import { Controller, Post, Body, Put, Param, Get, Delete } from '@nestjs/common';
import { CharactorService } from './charactor.service';
import { CreateCharactorDto } from "./dto/create-charactor.dto";
import {UpdateCharactorDto} from './dto/update-charactor.dto';
import * as mongoose from 'mongoose';
import { RetrieveCharactorDto } from './dto/retrieve-charactor.dto';
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

    @Get('list')
    async retrieveList(retrieveDto: RetrieveCharactorDto) {
        return await this.charactorService.retrieveList(retrieveDto);
    }

    @Get(':objectid')
    async retrieveById(@Param() retrieveDto: RetrieveCharactorDto) {
        return await this.charactorService.retrieveById(mongoose.Types.ObjectId(retrieveDto.objectid));
    }

    @Delete(':objectId')
    async deleteById(@Param('objectId') objectId: String) {
        console.log('删除角色===>' + objectId);
        return await this.charactorService.deleteCharactor(mongoose.Types.ObjectId(objectId));
    }

}
