import { Controller, Get, Inject } from '@nestjs/common';
import { ClassesService } from './classes.service';

@Controller('classes')
export class ClassesController {
    constructor(private readonly classesServices: ClassesService) { }
    @Get()
    async findAllClasses() {
        return await this.classesServices.findAllClass();
    }
}
