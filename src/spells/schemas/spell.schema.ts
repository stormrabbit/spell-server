import * as mongoose from 'mongoose';

export const SpellSchema = new mongoose.Schema(
    {
        name: String,
        nickname: String,
    }
);