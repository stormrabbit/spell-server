import {Document} from 'mongoose';
export interface Charactor extends Document {
    readonly name: string;
    readonly lvl: number;
    readonly race: string;
    readonly school: string;
    readonly cls: string;
    readonly value: number;
}