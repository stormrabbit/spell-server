import * as mongoose from 'mongoose';
export class CreateCharactorDto {
    _id:  mongoose.Types.ObjectId;
    readonly name: String;
    readonly cls: String;
    readonly race: String;
    readonly value: Number;
    readonly school: String;
    readonly lvl: Number;
}