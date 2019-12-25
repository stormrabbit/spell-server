import { Document } from 'mongoose';
export interface Class extends Document {
    name: string;
    nickname: string;
}