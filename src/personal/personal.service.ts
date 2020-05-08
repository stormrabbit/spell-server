import { Injectable } from '@nestjs/common';
import { PersonalSpellDto } from './dto/PersonalSpellDto';

@Injectable()
export class PersonalService {

    async updateSpellsById(id: string, personalDto: PersonalSpellDto) {
        return `已为${id}记录法术：${personalDto.name}`
    }
}
