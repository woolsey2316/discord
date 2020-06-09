import mongoose, { Schema, Document } from 'mongoose'

export interface IReaction extends Document {
  name: String
  _id: Number
}

const Reaction = new Schema({
  name: { type: String, required: true },
  _id: { type: Number, required: true },
})

module.exports = mongoose.model<IReaction>('reactions', Reaction)
