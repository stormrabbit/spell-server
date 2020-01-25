import { Charactor } from "../interface/charactor.interface";
import { Class } from "src/spells/interfaces/class.interface";
export class RetrieveResDto {
    nickname: string;
    clsName: string;
    color: string;
    id: any;
    constructor(charactor: Charactor, cls: Class) {
        this.nickname = charactor.name;
        this.clsName = cls.nickname;
        this.color = cls.color;
        this.id = charactor._id;
    }
}