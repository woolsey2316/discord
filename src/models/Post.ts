import bcrypt from "bcrypt-nodejs";
import crypto from "crypto";
import mongoose from "mongoose";
import { UserSchema } from './User'
import { UpdootSchema } from './Updoot'

export type PostDocument = mongoose.Document & {
    title: string;
    text: string;
    points: number;
    voteStatus: number | null;

    creatorId: number;
    creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
    updoots: { type: mongoose.Schema.Types.ObjectId, ref: 'Updoot' }

    createdAt: mongoose.Schema.Types.Date
};

export const postSchema = new mongoose.Schema({
    title: String,
    text: String,
    points: Number,
    voteStatus: {type: Number, default: null},

    creatorId: Number,
    creator: UserSchema,
    updoots: UpdootSchema,
    createdAt: Date,

}, { timestamps: true });

export const Post = mongoose.model<PostDocument>("Post", postSchema);
