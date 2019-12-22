import { Controller, Get, Req, Param } from '@nestjs/common';
import { Request } from 'express';
import { SpellsService } from './spells.service';
import { Spell } from './interfaces/spell.interface';

@Controller('spells')
export class SpellsController {

    constructor(private readonly spellService: SpellsService) { }
    // 查询法术，不传递 cls 表示查询全部
    // 否则查询特定职业法术
    @Get()
    async findAllSpells(@Req() request: Request): Promise<Spell[]> {
        const {
            cls = 'all',
        } = request.query;
        console.log(`find ${cls} spells `);
        return await this.spellService.findAll(cls);
    }

    // 模糊查询
    @Get('includes/:nickname')
    async findSpellsByNickName(@Param() params): Promise<Spell[]> {
        console.log(`you are looking for spells includes ${params.nickname} `);
        return await this.spellService.findSpellsByNickName(params.nickname);
    }

    // 精确查询
    @Get('equals/:name')
    findSpellByName(@Param() params): Promise<Spell> {
        console.log(`you are looking for  ${params.name} spell`);
        return this.spellService.findSpellByName(params.name);
    }

}
