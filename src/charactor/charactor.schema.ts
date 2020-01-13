import * as mongoose from 'mongoose';

export const CharactorSchema = new mongoose.Schema({
    name: String,
    lvl: Number,
    race: String,
    school: String,
    cls: String,
    value : Number,
});