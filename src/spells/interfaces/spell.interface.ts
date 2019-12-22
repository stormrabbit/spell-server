import { Document } from 'mongoose';
export interface Spell extends Document {
    name: string;
    nickname: string;
}