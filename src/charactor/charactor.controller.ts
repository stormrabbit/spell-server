import { Controller, Post, Body } from '@nestjs/common';
import { CharactorService } from './charactor.service';
import { CreateCharactorDto } from './create-charactor.dto';
@Controller('charactor')
export class CharactorController {

    constructor(
        private readonly charactorService: CharactorService,
    ){}

    @Post('create')
    async createCharactor(@Body() createCharactorDto: CreateCharactorDto) {
        console.log(createCharactorDto);
        this.charactorService.createCharactor(createCharactorDto);
        return '保存成功';
        // return createCharactorDto;
        // return charactorService.createCharactor();
    }

}
