import { Controller, Get, Param, Put, Body } from '@nestjs/common';
import { PersonalSpellDto } from './dto/PersonalSpellDto';

@Controller('personal')
export class PersonalController {
    @Get(':id')
    async retirevePersonalSpellsById(@Param('id') id: string) {
        return `查询${id}法术`;
    };
    @Put(':id')
    async upDatePersonalSpellById(@Param('id') id: string, @Body() personalDto: PersonalSpellDto) {
        return `已为${id}记录法术：${personalDto.name}`
    };
}
