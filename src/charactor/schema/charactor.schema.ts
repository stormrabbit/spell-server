import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

export const CharactorSchema = new mongoose.Schema({
        _id: ObjectId,
        name: String,
        lvl: Number,
        race: String,
        school: String,
        cls: String,
        value: Number,
},
    { versionKey: false } //  取消 _v 字段
);