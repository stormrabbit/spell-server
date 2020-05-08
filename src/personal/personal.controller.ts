import { Controller, Get, Param, Put, Body } from '@nestjs/common';
import { PersonalSpellDto } from './dto/PersonalSpellDto';
import { PersonalService } from './personal.service';

@Controller('personal')
export class PersonalController {
    constructor(
        private readonly personalService: PersonalService
    ) { }
    @Get(':id')
    async retirevePersonalSpellsById(@Param('id') id: string) {
        return `查询${id}法术`;
    };
    @Put(':id')
    async upDatePersonalSpellById(@Param('id') id: string, @Body() personalDto: PersonalSpellDto) {
        return this.personalService.updateSpellsById(id, personalDto);

    };
}
