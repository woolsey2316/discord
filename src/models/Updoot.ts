import bcrypt from "bcrypt-nodejs";
import crypto from "crypto";
import mongoose from "mongoose";
import { UserSchema } from './User'
import { postSchema } from './Post'

export type UpdootDocument = mongoose.Document & {
    value: number;
    userId: number;
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
    postId: number;
    post: { type: mongoose.Schema.Types.ObjectId, ref: 'Post' };
};

export const UpdootSchema = new mongoose.Schema({
  value: Number,
  userId: Number,
  user: UserSchema,
  postId: Number,
  post: postSchema

});

export const Updoot = mongoose.model<UpdootDocument>("Updoot", UpdootSchema);