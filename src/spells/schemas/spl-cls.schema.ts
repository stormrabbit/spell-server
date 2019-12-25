import * as mongoose from 'mongoose';

export const SplClsSchema = new mongoose.Schema(
    {
        spell_id: mongoose.Types.ObjectId,
    }
);